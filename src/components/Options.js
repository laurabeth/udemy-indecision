import React from "react";
import Option from "./Option";

const Options = props => {
  const { handleDeleteOptions, options } = props;
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={handleDeleteOptions}>
          Remove All
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to get started.</p>
      )}
      {options.map((x, i) => (
        <Option
          count={i + 1}
          handleDeleteOption={props.handleDeleteOption}
          key={x}
          text={x}
        />
      ))}
    </div>
  );
};

export default Options;
