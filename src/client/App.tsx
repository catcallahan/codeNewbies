<<<<<<< HEAD
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

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      navBar: "home",
    };
  }
=======
import * as React from 'react';

import FlashCard from './components/FlashCard';
import ChoicesBox from './components/ChoicesBox';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			name: null
		};
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-navbar bg-light">
					<a className="navbar-brand" href="#">codeNewbies</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
							<a className="nav-item nav-link justify-content-end" href="#">signIn / signUp</a>
						</div>
					</div>
				</nav>
				<FlashCard />
				<ChoicesBox />
			</div>
		);
	}
}
>>>>>>> 76833b874407941db007d375bab4ce0784d63914

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
              <User />
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
