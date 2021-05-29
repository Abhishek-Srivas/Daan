import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import DashBoard from '../Dashboard/Dashboard'
import "./Organization.css";
import Loader from "../../UI Elements/Loader/Loader";


import Home from '../Home/Home'

const Organiztion = (props) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    var active = props.match.params.id;
    setActive(active);
  });

  return (
    <DashBoard active={active}>
      <div className="hospitalContent">
        <Loader />
        <Switch>
          <Route exact path="/Organization/home" component={Home} />
        </Switch>
      </div>
    </DashBoard>
  );
};

export default Organiztion;
