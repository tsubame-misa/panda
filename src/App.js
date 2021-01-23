import React from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Talking from "./pages/Talking";
import Knife from "./pages/Knife";
import Teach from "./pages/Teach";
import Exp from "./pages/Explanation";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Home} exact={true} />
        {/*<Route exact path="/" render={() => <Redirect to="/" />} />*/}
        <Route path="/talk" component={Talking}></Route>
        <Route path="/knife" component={Knife}></Route>
        <Route path="/teach" component={Teach}></Route>
        <Route path="/explanation" component={Exp}></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
