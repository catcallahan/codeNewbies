import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FlashCard from "./Components/views/FlashCard";
import NavBarHome from "./Components/views/navbarHome";
import Home from "./Components/views/Home";
import Login from "./Components/views/Login";
import Quiz from "./Components/views/Quiz";
import Study from "./Components/views/Study";
import Resources from "./Components/views/Resources";
import Review from "./Components/views/Review";
import User from "./Components/views/userProfile";
import About from "./Components/views/aboutUs";

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
        <BrowserRouter>
          <NavBarHome />
          {/* <div>
            <FlashCard />
          </div> */}
          <Switch>
            <Route exact path="/flashcard">
              {" "}
              <FlashCard />
            </Route>
            <Route exact path="/">
              {" "}
              <Home />
            </Route>
            <Route exact path="/about">
              {" "}
              < About/>
            </Route>
            
            <Route exact path="/login">
              {" "}
              <Login />
            </Route>

            <Route exact path="/quiz">
              {" "}
              <Quiz />
            </Route>
            <Route exact path="/resources">
              <Resources />
            </Route>
            <Route exact path="/review">
              <Review />
            </Route>
            <Route exact path="/study">
              <Study />
            </Route>
            <Route exact path="/userprofile">
              <User />
            </Route>
          </Switch>
        </BrowserRouter>
      );
    }
  }
}

export interface IAppProps {}

export interface IAppState {
  navBar: string;
}

export default App;
