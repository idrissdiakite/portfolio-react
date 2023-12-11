import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Homepage";
import Presentation from "./pages/Presentation";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence> 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/qui-je-suis" exact component={Presentation} />
          <Route path="/experiences" exact component={Experiences} />
          <Route path="/projets" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
