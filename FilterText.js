import React, { Component } from 'react';
import Builder from './builder.js';
import Inp from './inp.js'
import './FilterText.css'


export default class FilterText extends Component{


state = {
    name: '',
    oldListArray : this.props.arrayList,
    listArray: [],
    input: '',
  }


  find = (event) => {
    var tempList = [];
    this.state.oldListArray.forEach(check);
    console.log(event.target.value);
    function check(value){
      console.log(value);
      console.log(event.target.value);
      let evalue = value.toUpperCase();
      let events = event.target.value.toUpperCase();
      console.log(evalue.indexOf(events, 0));
      if (evalue.indexOf(events, 0) != -1){
         tempList.push(value);
         console.log(tempList);
      }
    }
    if (event.target.value == ''){
        this.setState({
          listArray: [],
          input: event.target.value,

      })
    }
    else{
        this.setState({
          listArray: tempList,
          input: event.target.value,

    })
      }
    }
    
 clicked = (name) => {
    console.log(name);
 // console.log(event.target.value);
    this.setState({
      input: name,
      listArray: [],
    })

 }

  switchHandler = () => {
    alert('Clicked');
  }

	render(){
		return(
			<div className="App">
		          <p>
		            <Inp changed={this.find} name={this.state.input}/>
		            {this.state.listArray.map(builder => {
             			 return <Builder name={builder} clicked={this.clicked.bind(this, builder)}/>
            			})
            		}
		          </p>
      		</div>

			)
	}
}
