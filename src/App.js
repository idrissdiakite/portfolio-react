import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Me from "./pages/Me";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MenuManager from './components/Menu/MenuManager';


function App() {
  return (
    <BrowserRouter>
      <MenuManager />
      <AnimatePresence> 
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/me" exact component={Me} />
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
