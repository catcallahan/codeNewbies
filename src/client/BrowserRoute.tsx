import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./Components/views/Home"

const App: React.FC<BrowserProps> = () => {
    return (
        <BrowserRouter>
      <Switch>
      <Route exact path ="/"> 
          <Home />
          </Route>//Home

      <Route exact path ="/aboutUs"></Route>//aboutUs
      <Route exact path ="/Login"></Route>//Login
      <Route exact path ="/Quiz"></Route>//Quiz
      <Route exact path ="/Resources"></Route>//Resources
      <Route exact path ="/Review"></Route>//Review
      <Route exact path ="/Study"></Route>//Study
      <Route exact path ="/userprofile"></Route>//userProfile

      </Switch>
     </BrowserRouter>
    )
}
interface BrowserProps {}

export default App;