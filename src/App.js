import React from 'react';

import './App.css';
import Person from './Person/Person'
class App extends React.Component{
  state ={
    person:[
      {name:'sarita',age:18},
      {name: 'soumak',age:29},
      {name:'someone',age:90}
    ]
  }
switchNameHandler =(Newname) =>{
  this.setState( {
    person:[
      {name:Newname,age:18},
      {name: 'soumak maji ',age:29},
      {name:'someone',age:90}
    ]
  }
    )
}
nameChangeHandler =(event) =>{
  this.setState( {
    person:[
      {name:'Max',age:18},
      {name: event.target.value,age:29},
      {name:'someone',age:90}
    ]
  }
    )
}
  render(){
      return(
      <div className="App">
      <h1>Hi react App</h1>
      <button onClick={this.switchNameHandler.bind(this,'Max!!')}>Switch Name</button>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age= {this.state.person[1].age} click={this.switchNameHandler.bind(this,'Soumak')} changed={this.nameChangeHandler}/ >
      <Person name={this.state.person[2].name} age= {this.state.person[2].age} >Hobbies: Racing</Person>
    
      </div>
      );
  }
}

export default App;
