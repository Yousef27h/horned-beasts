import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import Data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      show: false,
      title: "",
      src: "",
      discription: "",
    };
  }

  selectClick = (e) => {
    this.setState({
      src: e.target.src,
      title: e.target.alt,
      discription: e.target.parentElement.nextSibling.textContent,
      show: true
    });
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  render() {
    return (
      <div>
        <Header />
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          src={this.state.src}
          discription={this.state.discription}
        />
        <Main data={this.state.data} selectClick={this.selectClick} />
        <Footer />
      </div>
    );
  }
}

export default App;
