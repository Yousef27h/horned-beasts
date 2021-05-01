import React from "react";
import HornedBeasts from "./HornedBeasts";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {
    let filterArr = [];
    if (this.props.filter === "all") {
      filterArr = this.state.data;
    } else if (this.props.filter === "one") {
      filterArr = this.state.data.filter((animal) => animal.horns === 1);
    } else if (this.props.filter === "two") {
      filterArr = this.state.data.filter((animal) => animal.horns === 2);
    } else {
      filterArr = this.state.data.filter((animal) => {
        return animal.horns !== 2 && animal.horns !== 1;
      });
    }
    return filterArr.map((value) => {
      return (
        <HornedBeasts
          name={value.title}
          url={value.image_url}
          title={value.title}
          alt={value.keyword}
          p={value.description}
          selectClick={this.props.selectClick}
        />
      );
    });
  }
}
export default Main;
