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
    return this.state.data.map((animal) => {
      return (
        <HornedBeasts
          name={animal.title}
          url={animal.image_url}
          title={animal.title}
          alt={animal.keyword}
          p={animal.description}
          selectClick = {this.props.selectClick}
        />
      );
    });
  }
}
export default Main;
