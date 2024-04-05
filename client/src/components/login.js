import React, { Component } from 'react'


export default class login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    };
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

  handleSubmit2(e){
    e.preventDefault();

    const[email,password] = this.state;
    
    fetch("http://localhost:3002/login2",{
      method:"GET",
      crossDomain: true,
      headers:{
        "Content-Type": "application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"data")
    })
  }


  render() {
    return (
      <div class = "outer-div-login">
        
      <h2>Sign Up</h2>
      
      <div class = "inner-div-login">

          <form onSubmit={this.handleSubmit2}>
          
              <label for = ""> Email </label>
              <input type = "email" onChange = {(e)=> this.setState({email:e.target.value})}  placeholder="Enter your Email"></input>

              <br></br>

              <label for = ""> Password </label>
              <input type = "password" onChange = {(e)=> this.setState({password:e.target.value})} placeholder="Password" ></input>
            
              <br></br>

              <button>Sign Up</button>

          </form>

      </div>

    </div>
    )
  }
}
