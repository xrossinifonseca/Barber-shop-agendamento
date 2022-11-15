import React from "react";

const MessageError = ({ error }) => {
  return (
    <h5 className="text-red-800 font-medium text-xs text-start ">{error}</h5>
  );
};

export default MessageError;
