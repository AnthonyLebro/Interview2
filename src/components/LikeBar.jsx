import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { grey, red} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
	likes: {
		backgroundColor: grey[900],
	},

	dislikes: {
		backgroundColor: red[600],
		margin: '0px 5px 5px 5px',
	},

	likeBar: {
		height: 4,
		borderRadius: 4,
	}
}));

const LikeBar = ({ likes, dislikes }) => {
	const classes = useStyles();

	const widthLikes = (likes, dislikes) => {
		if (typeof likes === 'number' && typeof dislikes === 'number') {
			const max = likes + dislikes;
			const width = (likes * 100) / max;
			return { width: `${width}%` };
		}
		return { width: '100%' };
	};

	return (
		<div className={`${classes.dislikes} ${classes.likeBar}`}>
			<div className={`${classes.likes} ${classes.likeBar}`} style={widthLikes(likes, dislikes)} />
		</div>
	);
};

LikeBar.propTypes = {
	likes: PropTypes.number.isRequired,
	dislikes: PropTypes.number.isRequired,
};

export default LikeBar;
