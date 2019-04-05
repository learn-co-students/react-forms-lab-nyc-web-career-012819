import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      maxChars: this.props.maxChars
    };
  }

  handleChange = e => {
    // console.log(e.target.value)
    this.setState({
      input: e.target.value,
      maxChars: --this.state.maxChars
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <p>characters left: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
