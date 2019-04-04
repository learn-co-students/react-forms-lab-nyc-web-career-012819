import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value,
    });
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username.length > 1 && this.state.password.length > 1) {
      this.props.handleLogin(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>Username</label>
          <input 
            id="username" 
            name="username" 
            type="text" 
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
