import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Image,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import UserProfile from "./UserProfile";
import PremiumModal from "./modal/PremiumModal";
import { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Box bg={useColorModeValue("orange.400", "orange.400")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link href={"./"}>
                <Image src="./logo.png" w={12} h={12} alt="logo" />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
              color={useColorModeValue("black", "white")}
            >
              <Link href="./">
                <Menu>
                  <MenuButton fontWeight={"bold"}>Home</MenuButton>
                </Menu>
              </Link>
              <Menu>
                <MenuButton fontWeight={"bold"}>Health Assessment</MenuButton>
                <MenuList>
                  <MenuItem as="a" href="./maternalForm">
                    Maternal Assessment
                  </MenuItem>
                  <MenuItem as="a" href="./reportForm">
                    Fetus Assessment
                  </MenuItem>
                </MenuList>
              </Menu>
              <Link href="./services">
                <Menu>
                  <MenuButton fontWeight={"bold"}>Services</MenuButton>
                </Menu>
              </Link>
              <Text fontWeight={"bold"} onClick={() => setIsModalOpen(true)}>
                Premium
              </Text>
            </HStack>

            <PremiumModal
              isOpen={isModalOpen}
              isClose={() => setIsModalOpen(false)}
            />
          </HStack>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"md"}
                src={
                  "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <UserProfile />
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </>
  );
}
