import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, ToggleButtonGroup, ToggleButton, IconButton, CardMedia, Typography, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import LikeBar from '../../components/LikeBar';
import Delete from '@mui/icons-material/DeleteForever';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import SentimentVeryDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentVeryDissatisfiedTwoTone';


const useStyles = makeStyles(theme => ({
	card: {
		margin: theme.spacing(4),
		height: 'max-content',
		maxwidth: '40vw',
		maxHeight: '100vh',
		position: 'relative',
		backgroundColor: 'darkgrey !important',
	},

	btnDelete: {
		position: 'absolute !important',
		top: '14px',
		right: '10px',
	},
	
	img: {
		maxHeight: '450px'
	},
	flex: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	}
}));

const MoviesCard = ({ movie, handleClick }) => {
	const classes = useStyles();
	const [toggle, setToggle] = useState(null);

	return (
		<Card variant="outlined" className={classes.card}>
			<CardHeader
				title={movie.title}
				subheader={movie.category}
			/>
			<CardMedia
				className={classes.img}
				component="img"
				height="100%"
				image={movie.img}
				alt="Image"
			/>

			<Grid className={classes.flex}>
				<Typography>{toggle === 'likes' ? movie.likes + 1 : movie.likes} Likes</Typography>
				<ToggleButtonGroup
					value={toggle}
					exclusive
					onChange={(e, toggle) => setToggle(toggle)}
					aria-label="Advice"
				>
					<ToggleButton  value="likes" aria-label="likes">
						<FavoriteRoundedIcon color='success'/>
					</ToggleButton>
					<ToggleButton  value="dislikes" aria-label="dislikes">
						<SentimentVeryDissatisfiedTwoToneIcon color='error'/>
					</ToggleButton>
				</ToggleButtonGroup>
				<Typography>{toggle === 'dislikes' ? movie.dislikes + 1 : movie.dislikes} Dislikes</Typography>
			</Grid>

			<LikeBar
				likes={toggle === 'likes' ? movie.likes + 1 : movie.likes}
				dislikes={toggle === 'dislikes' ? movie.dislikes + 1 : movie.dislikes}
			/>

			<IconButton
				className={classes.btnDelete}
				aria-label="fingerprint"
				size='medium'
				onClick={handleClick}
			>
				<Delete />
			</IconButton>
		</Card>
	);
};

MoviesCard.propTypes = {
	movie: PropTypes.object.isRequired
};

export default MoviesCard;
