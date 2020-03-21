import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = props => {
	console.log(props);
	return (
		<div>
			<h1>HAT ID: {props.match.params.id ?? 'None'}</h1>
			<Link to={`${props.match.url}/1`}>Hat #1</Link>
			<br />
			<Link to={`${props.match.url}/2`}>Hat #2</Link>
			<br />
			<Link to={`${props.match.url}/3`}>Hat #3</Link>
			<br />
			<Link to='/'>Home</Link>
		</div>
	);
};

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/hats' component={HatsPage} />
				<Route exact path='/hats/:id' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
