import React from 'react';
import './App.css';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/contactAPI';
import CreateContact from './CreateContact';
import {Route, Switch} from 'react-router-dom';
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

  onCreateContact(contact){
    console.log(contact);
    ContactsAPI.create(contact).then(contact => this.setState(state=>({
      contacts:state.contacts.concat([contact])
    })))
  }
  render(){
  return (
    <div className="App">
      <Route exact path="/" render={()=>(<ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact}/>)} />
      <Route path="/create" render={({history})=>(<CreateContact onCreateContact={(contact)=>{
        this.onCreateContact(contact)
        history.push('/')
      }}/>
      )}/>
    </div>
  );
}
}

export default App;
