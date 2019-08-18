import * as React from "react";
import Options from "./Options";

const Option = (props) => {
  const { text } = props;
  return(
    <div>
      {text}
      <button onClick={(e) => {
        props.handleDeleteOption(props.text)
      }}>Remove</button>
    </div>
  );
}

export default Option;