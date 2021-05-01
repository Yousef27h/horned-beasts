import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

class Forms extends React.Component {
  render() {
    return (
      <div>
        <Form.Group>
          <Form.Control
            onChange={this.props.handleSelect}
            as="select"
            size="lg"
          >
            <option selected value="all">
              Horns number
            </option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="more">Much more</option>
          </Form.Control>
        </Form.Group>
      </div>
    );
  }
}

export default Forms;
