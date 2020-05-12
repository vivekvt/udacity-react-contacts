import React from 'react';
import './App.css';
import ListContacts from './ListContacts';

class App extends React.Component{
  state={
   contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/images/vt.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/images/qwerty.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/images/vt.jpg"
      }
    ]
  }

  removeContact = (contact)=>{
    this.setState((state)=>({
      contacts:state.contacts.filter((c)=>c.id!==contact.id)
    }))
  }
  render(){
  return (
    <div className="App">
      <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact}/>
    </div>
  );
}
}

export default App;
