// in MessageParser.js
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes("hello")) {
      actions.handleHello();
    } else if (message.includes("panadol")) {
      actions.handleMedicalQueries();
    } else if (message.includes("stressed")) {
      actions.handleDepression();
    } else if (message.includes("diet")) {
      actions.handleDiet();
    } else if (message.includes("doctor")) {
      actions.handleDoctor();
    } else if (message.includes("yes")) {
      actions.handlePayment();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
