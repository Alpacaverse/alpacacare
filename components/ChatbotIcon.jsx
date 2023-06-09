import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader,
  PopoverArrow,
} from "@chakra-ui/react";
import { MdChatBubble } from "react-icons/md";
import ChatBotComponent from "./ChatbotComponent";

export default function ChatBotIcon() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) window.location.href = "/chatbot";
  }, [isOpen]);

  return (
    <>
      <Popover isLazy>
        <PopoverTrigger>
          <IconButton
            mb={5}
            shadow={"lg"}
            icon={<MdChatBubble />}
            size={"lg"}
            colorScheme={"orange"}
            bg={"orange.300"}
            variant="solid"
            position="fixed"
            bottom="20px"
            right={["16px", "30px"]}
          />
        </PopoverTrigger>
        <PopoverContent width={"95%"}>
          {/* <PopoverBody> */}
          <ChatBotComponent />
          {/* </PopoverBody> */}
        </PopoverContent>
      </Popover>
    </>
  );
}
