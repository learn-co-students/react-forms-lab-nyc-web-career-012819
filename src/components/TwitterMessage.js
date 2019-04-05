import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputText: ""
    };
  }

  changeHandler =(e) => {
    this.setState({inputText: e.target.value})
  }

  render() {
    console.log(this.state.inputText)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.inputText} onChange={this.changeHandler}/>
        <p>Remaining Characters: {this.props.maxChars - this.state.inputText.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
