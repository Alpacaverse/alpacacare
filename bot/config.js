import { createChatBotMessage, WidgetAvatar  } from 'react-chatbot-kit';

const botName = 'AlpacaCare';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}. Sharing love and care for alpacas!`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#F57C00',
    },
    chatButton: {
      backgroundColor: '#F57C00',
    },
    
  },
    
};

export default config;