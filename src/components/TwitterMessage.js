import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) =>{
    this.setState({message: e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Available chars: {140 - this.state.message.length}</p>
        <input value={this.state.message} onChange={this.handleChange} type="text" name="message" id="message" maxLength={this.props.maxChars}/>
      </div>
    );
  }
}

export default TwitterMessage;
