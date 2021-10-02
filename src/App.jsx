import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Presentation from "./pages/Presentation";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
<BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/presentation" exact component={Presentation} />
        <Route path="/experiences" exact component={Experiences} />
        <Route path="/projets" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
