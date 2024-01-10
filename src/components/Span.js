import React from "react";
import { NavLink } from "react-router-dom";

const Span = (props) => {
  return <>
    <NavLink
        to = {`/ecommerce/product/${props.value}`}
    >
      {props.value}
    </NavLink>
  </>;
};

export default Span;
