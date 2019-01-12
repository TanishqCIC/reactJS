import React from 'react';

const Assign = (props) => {
	return(
		<div>
		<p>{props.name}</p>
		<input type="text" onChange={props.changed}/>
		</div>
	)
};

export default Assign;