import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDepression = () => {
    const botMessage = createChatBotMessage(
      "Take a deep breath and prioritize self-care. You're doing great!"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDiet = () => {
    const botMessage = createChatBotMessage(
      "It's important to have a balanced diet during pregnancy, which includes plenty of fruits, vegetables, lean protein, whole grains, and healthy fats."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleMedicalQueries = () => {
    const botMessage = createChatBotMessage(
      "Yes, u can. Panadol is considered safe to take during pregnancy for mild to moderate pain relief or to reduce fever."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleDoctor = () => {
    const botMessage = createChatBotMessage(
      "Do you wish to proceed with online consultation? RM150 would be charged to your card."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handlePayment = () => {
    const botMessage = createChatBotMessage("Payment sucess.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDepression,
            handleDiet,
            handleMedicalQueries,
            handleDoctor,
            handlePayment,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
