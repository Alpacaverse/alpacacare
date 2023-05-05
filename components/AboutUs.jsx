import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = (props) => {
  return <Box maxW={340}>{[props.children]}</Box>;
};

const TestimonialContent = (props) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      h={220}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      textAlign={"center"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {[props.children]}
    </Stack>
  );
};

const TestimonialHeading = (props) => {
  return (
    <Heading
      as={"h3"}
      fontSize={"xl"}
      color={useColorModeValue("gray.700", "gray,300")}
      textAlign={"center"}
    >
      {[props.children]}
    </Heading>
  );
};

const TestimonialText = (props) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {[props.children]}
    </Text>
  );
};

export default function AboutUs() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack
          spacing={5}
          align={"center"}
          justify={"center"}
          pos={"relative"}
          color={useColorModeValue("gray.700", "gray,300")}
        >
          <Heading mb={5} size="2xl">
            We{" "}
            <Text as="span" color="orange.400">
              Care{" "}
            </Text>
            About You
          </Heading>
          <Text textAlign={"center"}>
            Mothers all around have the fear of anything that may negatively
            impact the health of their baby. Ranging from diet, auto-immune
            disease, external trauma, loss of appetite, and so much more.
          </Text>
          <Heading size={"md"} color={"orange.400"}>
            Here is how we help
          </Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          justify={"center"}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Projecting Your Medical Reports
              </TestimonialHeading>
              <TestimonialText>
                We are able to provide you with Gestational Age Reports to
                accurately classify SGA & LGA babies based off your provided
                medical reports
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Recommending The Best Mode Of Delivery
              </TestimonialHeading>
              <TestimonialText>
                Based off the fetus presentation and health of the mother
                amongst numerous other factors, we can suggest the best mode of
                delivery for you.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Aiding in Post Pregnancy Depression
              </TestimonialHeading>
              <TestimonialText>
                Benefactors and mothers can be provided with support and mental
                checks to make sure they continue to be in good health.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
