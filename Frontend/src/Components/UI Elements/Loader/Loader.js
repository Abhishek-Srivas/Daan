import React, { Component } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import "./Loader.css";
import loader from "../../../assets/loader.gif";

const Loader = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <React.Fragment>
      {promiseInProgress === true ? (
        <div className="LoaderContainer">
          <div className="loaderbg">
            <img src={loader} className="loader" alt="spinner" />
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Loader;
