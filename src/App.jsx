import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
<BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/presentation" exact component={Info} />
        <Route path="/experiences" exact component={Experience} />
        <Route path="/projets" exact component={Project} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
