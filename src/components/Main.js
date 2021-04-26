import React from "react";
import HornedBeasts from "./HornedBeasts";
import Data from "../data.json";


class Main extends React.Component {
  // const renderArr = [];
  // for (let i = 0; i < Data.length; i++) {
  //   renderArr.push(
  //     <div>
  //       <HornedBeasts
  //         name={animal.title}
  //         url={animal.image_url}
  //         title={animal.title}
  //         alt={animal.keyword}
  //         p={animal.description}
  //       />
  //     </div>
  //   );
  // }
  render() {
    return Data.map((animal) => {
      return (
        <HornedBeasts
          name={animal.title}
          url={animal.image_url}
          title={animal.title}
          alt={animal.keyword}
          p={animal.description}
        />
      );
    });
  }
}
export default Main;
