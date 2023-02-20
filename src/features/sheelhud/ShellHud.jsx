import * as React from "react";

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this.mui = {
      //theme: createTheme()
    };
  }

  a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`
    };
  }

  render() {
    if (!this.state.show) {
      return null;
    }
    return <div>HUD</div>;
  }
}

export default Character;
