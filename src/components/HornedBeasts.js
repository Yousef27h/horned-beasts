import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hearts: 0 };
  }
  incrementHearts = () => {
    this.setState({
      hearts: this.state.hearts + 1,
    });
  };
  render() {
    return (
      <section>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            onClick={this.incrementHearts}
            src={this.props.url}
            title={this.props.title}
            alt={this.props.alt}
          />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.p}</Card.Text>
            <Card.Text>❤️{this.state.hearts}</Card.Text>
          </Card.Body>
        </Card>
      </section>
    );
  }
}

export default HornedBeasts;
