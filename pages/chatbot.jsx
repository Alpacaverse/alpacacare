import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  Text,
  Select,
  Center,
} from "@chakra-ui/react";
import { MdOutlineUploadFile } from "react-icons/md";

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../bot/config.js";
import MessageParser from "../bot/MessageParser.jsx";
import ActionProvider from "../bot/ActionProvider.jsx";

export default function ChatBot() {
  return (
    <Center width={"100%"}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </Center>
  );
}
