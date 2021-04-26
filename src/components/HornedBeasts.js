import React from "react";

class HornedBeasts extends React.Component {
  render() {
    return (
      <section>
        <h2>{this.props.name}</h2>
        <img
          src={this.props.url}
          title={this.props.title}
          alt={this.props.alt}
        />
        <p>{this.props.p}</p>
      </section>
    );
  }
}

export default HornedBeasts;
