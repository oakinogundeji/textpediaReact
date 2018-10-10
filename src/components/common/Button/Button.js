/**
 * created by Samson Iyanda on 10-10-2018
 */
//

import React from "react";
import "./Button.css";

const Button = ({className, style, children, onClick, disabled }) => {
  return (
    <button
      type="submit"
      className={"button " + className }
      style={ style }
      onClick={ onClick }
      disabled={ disabled }>
      { children }
    </button>
  );
};

export default Button;
