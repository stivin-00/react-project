import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/nav/App";
import Birthday from "./components/birthday-reminder/App";
import Accordion from "./components/accordion/App"
import Cart from "./components/cart/Appp";
import Cocktails from "./components/cocktails-api/App";
import Color from "./components/color-generator/App";
import Grocery from "./components/grocery-bud/App";
import Lorem from "./components/lorem-ipsum/App";
import Menu from "./components/menu/App";
import Navbar from "./components/navbar/App";
import Reviews from "./components/reviews/App";
import Sidebar from "./components/sidebar-&-modal/App";
import Slider from "./components/slider/App";
import Submenu from "./components/submenus/App";
import Tabs from "./components/tabs/App";
import Tours from "./components/tours/App";
import Footer from "./components/footer/App";

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Birthday />
        </Route>
        <Route exact path="/accordion">
          <Accordion />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/color">
          <Color />
        </Route>
        <Route exact path="/grocery">
          <Grocery />
        </Route>
        <Route exact path="/lorem">
          <Lorem />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/navbar">
          <Navbar />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/sidebar">
          <Sidebar />
        </Route>
        <Route exact path="/slider">
          <Slider />
        </Route>
        <Route exact path="/submenus">
          <Submenu />
        </Route>
        <Route exact path="/tabs">
          <Tabs />
        </Route>
        <Route exact path="/tour">
          <Tours />
        </Route>
        <Route exact path="/cocktails">
          <Cocktails />
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
