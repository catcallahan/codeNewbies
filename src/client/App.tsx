import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Quiz from "./views/Quiz";
import Study from "./views/Study";
import Resources from "./views/Resources";
import Review from "./views/Review";
import User from "./views/userProfile";
import About from "./views/aboutUs";
import Category from "./views/Category"

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      navBar: "home",
    };
  }

  render() {
    
      return (
        <BrowserRouter>
          <Switch>
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
              {" "}
              <Study />
            </Route>
             <Route exact path="/userprofile">
             {" "}
              <User />
            </Route>
            <Route exact path="/category">
            {" "}
              <Category />
            </Route>
            
          </Switch>
        </BrowserRouter>
      );
  }
}

export interface IAppProps {}

export interface IAppState {
  navBar: string;
}

export default App;
