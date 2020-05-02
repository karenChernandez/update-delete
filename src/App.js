import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Input from './Components/Input/Input';
import Contact from './Components/Contact/Contact';

class App extends Component{
  constructor(props){
    super(props);



    this.state={
      contacts:[],
      name:'',
      phoneNumber: '',
      email: ''
    }
  }
  componentDidMount(){
    axios.get('/api/contacts',).then(res=>{
      console.log('Here is RES!', res)
      console.log('Type of RES', typeof res.data)
      this.setState({contacts: res.data})


    })
  }

  handleName=value=>{
    this.setState({name:value})
  }
  handlePhoneNumber=value=>{
    this.setState({phoneNumber:value})
  }
  handleEmail=value=>{
    this.setState({email:value})
  }
  handleSubmit=()=>{
    axios.post('/api/contacts',{
      name:this.state.name,
      phoneNumber:this.state.phoneNumber,
      email:this.state.email
    }).then(res=>
      this.setState({
        contacts:res.data,
        name:'',
        phoneNumber: '',
        email: ''
      }))
  }
  handleDelete = (contactId) => {
    axios.delete(`/api/contacts/${contactId}`).then(res => {
      //console.log('What is RES?', res)
      this.setState({contacts:res.data})
    })}

  handleUpdate=(contactId)=>{
    console.log("App -> handleUpdate -> contactId", contactId)
    axios.put(`/api/contacts/${contactId}`, {
      name:this.state.name,
      phoneNumber:this.state.phoneNumber,
      email:this.state.email
    }).then(res=>{
      this.setState({contacts:res.data})
    })
  }
  

  render(){
    console.log('what is state?', this.state.contacts)
    let mappedContacts= this.state.contacts.map((contact)=>{
    console.log("render -> contact", contact)
      return <Contact name={contact.name} email={contact.email} phoneNumber={contact.phoneNumber} delete={this.handleDelete} update={this.handleUpdate}/>
    })
    //all input's data are strings ''
  return (
    <div>
      <h1>Contact List</h1>
      
      <Input  value={this.state.name} handler={this.handleName} placeholder='Name' type='text'/>
      <Input value={this.state.phoneNumber} handler={this.handlePhoneNumber} placeholder='Phone Number' type='tel'/>
      <Input value={this.state.email} handler={this.handleEmail} placeholder='E-mail' type='email'/>
      {/* <input value={this.state.name}placeholder="Name" onChange={event =>this.handleName(event.target.value)}/> */}
      {/* <input value={this.state.phoneNumber}placeholder="Phone Number" onChange={event=>this.handlePhoneNumber(event.target.value)}/>*/}
    {/* <input value={this.state.email}placeholder="E-mail" onChange={event=>this.handleEmail(event.target.value)}/> */}
      <button onClick={()=>this.handleSubmit()}>Submit</button>
      {/* <button onClick={event=>this.handleDelete()}></button> */}
      {mappedContacts}
    </div>
  );
  }
}

export default App;
