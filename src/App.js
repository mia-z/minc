import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Header from "./_shared/_header";
import Footer from "./_shared/_footer";

function App() {
  return (
    <>
    <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
