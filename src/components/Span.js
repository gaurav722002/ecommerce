import React from "react";
import { NavLink } from "react-router-dom";

const Span = (props) => {
  return <>
    <NavLink
        to = {`/product/${props.value}`}
    >
      {props.value}
    </NavLink>
  </>;
};

export default Span;
