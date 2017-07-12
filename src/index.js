import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from './Button';
import Title from './Title';
import CurrentEvent from './currentEvent';
import Reference from './reference';

ReactDOM.render(
	<App cat={5} />, 
	document.getElementById('root')
);

ReactDOM.render(
	<Button />, 
	document.getElementById('button')
);

ReactDOM.render(
	<Title />, 
	document.getElementById('title')
);

ReactDOM.render(
	<CurrentEvent />, 
	document.getElementById('current-event')
);

ReactDOM.render(
	<Reference/>, 
	document.getElementById('reference')
);