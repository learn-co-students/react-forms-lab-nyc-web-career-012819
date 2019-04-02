import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  change = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  submit = (ev) => {
    ev.preventDefault()
    if (!this.state.username || !this.state.password) {
    	return
    } else {
    	this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.change}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.change}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
