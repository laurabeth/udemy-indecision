import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const OptionModal = props => {
  const { selectedOption, dismiss } = props;
  return (
    <Modal
      className="modal"
      closeTimeoutMS={200}
      contentLabel="Selected Option"
      isOpen={!!selectedOption}
      onRequestClose={dismiss}
    >
      <h3 className="modal__title">Selected Option</h3>
      <p className="modal__body">{selectedOption}</p>
      <button className="button" onClick={dismiss}>
        Okay
      </button>
    </Modal>
  );
};

export default OptionModal;
