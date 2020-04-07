import * as React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import FlashCard from "./Components/views/FlashCard";
import NavBarHome from "./Components/views/navbarHome";
import NavBar2 from "./Components/views/nav2";

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      navBar: "home",
    };
  }

  render() {
    if (this.state.navBar === "home") {
      return (
        <React.Fragment>
          <NavBarHome />
          <Router>
            <Switch>
              <Route exact path="/aboutUs"></Route>//aboutUs
              <Route exact path="/Login"></Route>//Login
              <Route exact path="/Quiz"></Route>//Quiz
              <Route exact path="/Resources"></Route>//Resources
              <Route exact path="/Review"></Route>//Review
              <Route exact path="/Study" component = {FlashCard}></Route>
              <Route exact path="/userprofile"></Route>//userProfile
            </Switch>
          </Router>
        </React.Fragment>
      );
    }
  }
}

export interface IAppProps {}

export interface IAppState {
  navBar: string;
}

export default App;
