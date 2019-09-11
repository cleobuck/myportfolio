import React, { Component } from 'react';
import axios from 'axios';

const API_PATH = 'http://localhost/myportfolio/api/contact/index.php';

class Form extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      withCredentials: false,
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
        console.log(this.state)
      })
      .catch(error => this.setState({ error: error.message }));
  };
  
  
  
  
  render() {


    return (

      <form action="#">
      <label>First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." value={this.state.fname} onChange={e => this.setState({fname:e.target.value})}/>
      <label>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={this.state.lname} onChange={e => this.setState({lname: e.target.value})}/>
  
  
      <label>Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" value={this.state.email} onChange={e => this.setState({email:e.target.value})} />
  
  
      <label>Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." value={this.state.message} onChange={e => this.setState({message: e.target.value})}></textarea>
      <input type="submit" value="Submit" onClick={e => this.handleFormSubmit(e)} />
      <div>
        {this.state.mailSent &&
          <div>Thanks! </div>
        }
      </div>
      
      
      </form>

      
    );
  }
}

export default Form;