import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import Data from "./data.json";
import Forms from "./components/form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      show: false,
      title: "",
      src: "",
      discription: "",
      filterValue: "all",
    };
  }

  selectClick = (e) => {
    this.setState({
      src: e.target.src,
      title: e.target.alt,
      discription: e.target.parentElement.nextSibling.textContent,
      show: true,

    });
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleSelect = (event) => {
    this.setState({
      filterValue: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Forms handleSelect={this.handleSelect}/>
        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          src={this.state.src}
          discription={this.state.discription}
        />
        <Main
          data={this.state.data}
          selectClick={this.selectClick}
          filter={this.state.filterValue}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
