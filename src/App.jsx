import React from 'react';
import './App.css';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/contactAPI';
class App extends React.Component{
  state={
   contacts : []
  }
  componentDidMount(){
    ContactsAPI.getAll().then((contacts)=>{
        this.setState({contacts});
    })
  }

  removeContact = (contact)=>{
    this.setState((state)=>({
      contacts:state.contacts.filter((c)=>c.id!==contact.id)
    }))
    ContactsAPI.remove(contact);
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
