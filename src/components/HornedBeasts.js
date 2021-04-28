import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hearts: 0,
      src: "",
      title: "",
      discription: "",
    };
  }
  incrementHearts = () => {
    this.setState({
      hearts: this.state.hearts + 1,
    });
  };
  
  render() {
    return (
      <section>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td width={200}>{this.props.name}</td>
              <td width={200}>
                <Image
                  width={171}
                  height={180}
                  variant="primary"
                  style={{cursor:'pointer'}}
                  onClick={this.props.selectClick}
                  src={this.props.url}
                  title={this.props.title}
                  alt={this.props.alt}
                  rounded
                />
              </td>
              <td width={200}>{this.props.p}</td>
              <td width={100} onClick={this.incrementHearts} ><span style={{cursor:'pointer'}}>❤️{this.state.hearts}</span></td>
            </tr>
          </tbody>
        </Table>
      </section>
    );
  }
}

export default HornedBeasts;
