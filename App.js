import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Assign from './Assign/Assign';
import Try from './Assign/try';

class App extends Component {
  state = {
    name: 'Engineer',
    age: 'University of Delhi',
    length: 'Empty string'
  }

  switchHandler = () => {
    alert('Clicked');
  }

  newChangeHandler = (event) => {
    this.setState({
      name : event.target.value,
      age: event.target.value
  })
  }

  changeAssign = (event) => {
    this.setState({
       length: event.target.value.length,
  })
  }

  render() {
    /*
    let Parameter = 1;
    let Nopes;
    if(Parameter === 1){
      Nopes = ( 
        <div>
        <p>"Bonjour Monsieur!"
        </p>
        </div>
        );
    
    }
    */
    /*
            After <code> Tanishq </code>
            <code><Person name={this.state.name} changer={this.newChangeHandler}/></code>
            {Nopes}
            <Person age={this.state.age} changer={this.newChangeHandler}/>
            <Person name="Delhi Public School" /> 


            <Assign name={this.state.length} changed={this.changeAssign}/>
            */
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Tanishq Dhangar</code>
             <Assign name={this.state.length} changed={this.changeAssign}/>
        
          </p>
          <a
            className="App-link"
            href="https:// sites.google.com/ducic.ac.in/tanishq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button onClick={this.switchHandler}>Know Me</button>
          </a>
        </header>
      </div>
      );
      
      //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Tanishq'));
  }
}

export default App;
