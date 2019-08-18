import React from "react";

const Action = (props) => {
  const { handleMakeDecision, hasOptions } = props;
    return (
      <div>
        <button 
          onClick={handleMakeDecision}
          disabled={!hasOptions}>
            What should I do?
          </button>
      </div>
    );
}

export default Action;