import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => {
  const { selectedOption, dismiss } = props;
  return (
    <Modal
      isOpen={!!selectedOption}
      contentLabel="Selected Option"
      onRequestClose={dismiss}
    >
      <h3>Selected Option</h3>
      <p>{selectedOption}</p>
      <button onClick={dismiss}>Okay</button>
    </Modal>
  );
};

export default OptionModal;
