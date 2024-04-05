import React, { Component } from 'react'

export default class SignUp extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      fname : "",
      email : "",
      password: "",
      cpassword:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 

  handleSubmit(e){
    e.preventDefault();
    const {fname,email,password,cpassword} = this.state;
    // console.log(fname,email,password,cpassword)
    fetch("http://localhost:3002/register",{
      method:"POST",
      crossDomain: true,
      headers:{
        "Content-Type": "application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body: JSON.stringify({
        fname,
        email,
        password,
        cpassword
      }),
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data, "userRegister")
      });
  }

  render() {
    return (
      <>
      <div class = "outer-div-login">
        
        <h2>Sign Up</h2>
        
        <div class = "inner-div-login">

            <form onSubmit={this.handleSubmit}>
                <label for = "">Name</label>
                <input type = "text" onChange = {(e)=> this.setState({fname:e.target.value})} placeholder="Enter your Name"></input>

                <br></br>

                <label for = ""> Email </label>
                <input type = "email" onChange = {(e)=> this.setState({email:e.target.value})}  placeholder="Enter your Email"></input>

                <br></br>

                <label for = ""> Password </label>
                <input type = "password" onChange = {(e)=> this.setState({password:e.target.value})} placeholder="Password" ></input>
              
                <br></br>

                <label for = "">Confirm Password</label>
                <input type = "password" onChange = {(e)=> this.setState({cpassword:e.target.value})} placeholder="Confirm Password"  ></input>

                <br></br>

                <button>Sign Up</button>

            </form>

        </div>

      </div>
        
      </>
      
    )
  }
}
