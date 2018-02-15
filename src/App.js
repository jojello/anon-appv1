import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super()
    //define initial started
    this.state = {
      projects: []
    }
  }

//Lifecycle methods
  componentWillMount(){
    this.setState({projects: [
    {
      title: 'Business Website',
      category:'Web design'
    },
    {
      title: 'Social App',
      category:'Mobile Development'
    },
    {
      title: 'Ecommerce Shopping Cart',
      category:'Web Development'
    }
]});
  }

handleAddProject(project){
  console.log(project);
}

  render() {
    return (
      <div className="App">
    <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
