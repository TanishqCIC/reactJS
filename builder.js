import React from 'react';

const Builder = (props) => {

		return (
				<a>		<center>
				<button id="dropdown" onClick={props.clicked}>{props.name}</button>
				</center>  </a>
		)
};

export default Builder;