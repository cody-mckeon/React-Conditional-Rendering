import React from "react";

function Input(props) {
  return (
    <form className="form">
      <input type={props.type} placeholder={props.placeholder} />
    </form>
  );
}

export default Input;
