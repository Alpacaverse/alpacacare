import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

function PriceWrapper(props) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.900", "gray.900")}
      borderRadius={"xl"}
    >
      {[props.children]}
    </Box>
  );
}

export default function PremiumModal(props) {
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.isClose}
        closeOnOverlayClick
        size={"6xl"}
      >
        <ModalOverlay />
        <ModalContent bg={"white"} borderRadius={20}>
          <ModalCloseButton color={"black"} />
          <ModalBody>
            <Box py={12}>
              <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl" color={"black"}>
                  Premium Plans That Care For You
                </Heading>
                <Text fontSize="lg" color={"orange.400"}>
                  Enjoy our services? Get premium to enjoy more! We offer the
                  best package plans available.
                </Text>
              </VStack>
              <Stack
                direction={{ base: "column", md: "row" }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 6 }}
                p={10}
              >
                <PriceWrapper>
                  <Box py={4} px={12} color={"black"}>
                    <Text fontWeight="500" fontSize="2xl">
                      Basic
                    </Text>
                    <HStack justifyContent="center">
                      <Text fontSize="3xl" fontWeight="600">
                        RM
                      </Text>
                      <Text fontSize="5xl" fontWeight="900">
                        200
                      </Text>
                      <Text fontSize="3xl" color="orange.400">
                        /month
                      </Text>
                    </HStack>
                  </Box>
                  <VStack
                    bg={useColorModeValue("orange.100", "orange.100")}
                    py={4}
                    borderBottomRadius={"xl"}
                  >
                    <List
                      spacing={3}
                      textAlign="start"
                      px={12}
                      color={"gray.800"}
                    >
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />2
                        doctor appointments /month
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Unlimited GA & MOD Reports
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Ad-free experience
                      </ListItem>
                    </List>
                    <Box w="80%" pt={7}>
                      <Button
                        w="full"
                        bg={"purple.300"}
                        color={"black"}
                        _hover={{ bg: "orange.400" }}
                      >
                        Start trial
                      </Button>
                    </Box>
                  </VStack>
                </PriceWrapper>

                <PriceWrapper>
                  <Box position="relative">
                    <Box
                      position="absolute"
                      top="-16px"
                      left="50%"
                      style={{ transform: "translate(-50%)" }}
                    >
                      <Text
                        textTransform="uppercase"
                        bg={useColorModeValue("red.300", "red.700")}
                        px={3}
                        py={1}
                        color={"white"}
                        fontSize="sm"
                        fontWeight="600"
                        rounded="xl"
                      >
                        Most Popular
                      </Text>
                    </Box>
                    <Box py={4} px={12} color={"black"}>
                      <Text fontWeight="500" fontSize="2xl">
                        All Around Diet
                      </Text>
                      <HStack justifyContent="center">
                        <Text fontSize="3xl" fontWeight="600">
                          RM
                        </Text>
                        <Text fontSize="5xl" fontWeight="900">
                          350
                        </Text>
                        <Text fontSize="3xl" color="orange.400">
                          /month
                        </Text>
                      </HStack>
                    </Box>
                    <VStack
                      bg={useColorModeValue("orange.300", "orange.100")}
                      py={4}
                      borderBottomRadius={"xl"}
                    >
                      <List
                        spacing={3}
                        textAlign="start"
                        px={12}
                        color={"gray.800"}
                      >
                        <ListItem>
                          <ListIcon as={FaCheckCircle} color="green.500" />2
                          doctor appointments /month
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaCheckCircle} color="green.500" />
                          Unlimited GA & MOD Reports
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaCheckCircle} color="green.500" />
                          Ad-free experience
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaCheckCircle} color="green.500" />3
                          Ready-to-eat meals a day
                        </ListItem>
                        <ListItem>
                          <ListIcon as={FaCheckCircle} color="green.500" />1
                          toddler accessory per month
                        </ListItem>
                      </List>
                      <Box w="80%" pt={7}>
                        <Button
                          w="full"
                          bg={"pink.300"}
                          _hover={{ bg: "orange.400" }}
                        >
                          Start trial
                        </Button>
                      </Box>
                    </VStack>
                  </Box>
                </PriceWrapper>

                <PriceWrapper>
                  <Box py={4} px={12} color={"black"}>
                    <Text fontWeight="500" fontSize="2xl">
                      Consultation
                    </Text>
                    <HStack justifyContent="center">
                      <Text fontSize="3xl" fontWeight="600">
                        RM
                      </Text>
                      <Text fontSize="5xl" fontWeight="900">
                        380
                      </Text>
                      <Text fontSize="3xl" color="orange.400">
                        /month
                      </Text>
                    </HStack>
                  </Box>
                  <VStack
                    bg={useColorModeValue("orange.50", "orange.100")}
                    py={4}
                    borderBottomRadius={"xl"}
                  >
                    <List
                      spacing={3}
                      textAlign="start"
                      px={12}
                      color={"gray.800"}
                    >
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />4
                        doctor appointments /month
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Unlimited GA & MOD Reports
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Ad-free experience
                      </ListItem>
                    </List>
                    <Box w="80%" pt={7}>
                      <Button
                        w="full"
                        colorScheme="blue"
                        _hover={{ bg: "orange.400" }}
                      >
                        Start trial
                      </Button>
                    </Box>
                  </VStack>
                </PriceWrapper>
              </Stack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
