import React, { Component } from 'react';

import './App.css';

import ListContacts from './ListContacts'
//mutable vs immutable 
// props - immutable - u cannot manipulte the state
//state - mutable - components - data mutation 
// button - onclick event handler  
//ui
//lifecycle events

// updating a state
//this.state.username
//this.setState({
  //  username = "aman"
//}) - explicit mutation .. UI = fn(state)


class App extends Component {
constructor(props){
    super()
    this.state = {
      contacts : [
        {
          id: '1',
          name: 'afzal',
          handle: '@afzal',
          avatarURL: 'http://localhost:5001/afzal.jpg'
        },
        {
          id: '2',
          name: 'Karen Isgrigg',
          handle: '@karen_isgrigg',
          avatarURL: 'http://localhost:5001/karen.jpg'
        },
        {
          id: '3',
          name: 'Richard Kalehoff',
          handle: '@richardkalehoff',
          avatarURL: 'http://localhost:5001/richard.jpg'
        },
      ]
    }
  
  // this.removeContact = this.removeContact.bind(this)
    
  }
  removeContact= (contact)=>{
    console.log(this);
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
}

  render() {
    return (
      <div className="App">
       <ListContacts 
       contacts={this.state.contacts} 
       onDeleteContact = {this.removeContact}
       />
      </div>
    );
  }
}

export default App;
