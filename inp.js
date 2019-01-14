import React from 'react';
import './FilterText.css';

const Inp = (props) => {
		return (
				 <input type="text" onChange={props.changed} value={props.name} id="inputText"/>
		)
};

export default Inp;