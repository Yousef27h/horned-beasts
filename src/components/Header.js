import React from "react";

class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {anyText : 'Click me'};
  }
  handleFun = ()=>{
    this.setState({
      anyText : 'Hello!'
    });
  }
  render() {
    return (
      <div>
        <h1>React Intro</h1>
        <p onClick={this.handleFun}>{this.state.anyText}</p>
      </div>
    );
  }
}

export default Header;
