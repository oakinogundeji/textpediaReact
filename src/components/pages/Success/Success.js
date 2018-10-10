/**
 * created by Samson Iyanda on 10-10-2018
 */
//


import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";

import "./Success.css";

const Success = () => (
  <Fragment>
    <span>TRY TEXTPEDIA</span>
    <h1 className="is-size-1-desktop is-size-3-tablet is-size-3-mobile">SUCCESS</h1>
    <p>Your account has been confirmed</p>
    <br/>
    <Link to="/" className="button is-primary">Back Home</Link>
  </Fragment>
);

export default Success;
