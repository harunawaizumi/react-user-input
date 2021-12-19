import React from 'react';

const ErrorModal = props => {
  return (
    <div>
    <div onClick={props.onConfirm}>Dismiss</div>
    {props.title} {props.message}
    </div>
  );
};

export default ErrorModal;
