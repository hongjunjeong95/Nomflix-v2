import Router from "Components/Router";
import React from "react";
import GlobalStyles from "./GlobalStyles";

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Router />
      </>
    );
  }
}

export default App;
