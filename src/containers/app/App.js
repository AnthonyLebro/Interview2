import './App.css';
import Movies from '../movies';
// import Logo from '../public/images/logo.png';
import { Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	title: {
		padding: theme.spacing(2),
		backgroundColor: "black",
	},

}));

function App() {
	const classes = useStyles();

	return (
		<div className="App">
			<Typography variant='h2' className={classes.title}>FAKEFLIX</Typography>
			<Divider />	
			<Movies />
		</div>
	);
}

export default App;
