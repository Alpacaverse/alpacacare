import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Center,
  Grid,
  SimpleGrid,
  AspectRatio,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Flex,
  Avatar,
  IconButton,
  Box,
  StackDivider,
  HStack,
  CardHeader,
  Button,
} from "@chakra-ui/react";
import { profiles } from "../lib/profiles";

export default function Report() {
  const profilesData = profiles();
  return (
    <>
      <Header />
      <Center>
        <Box p={6}>
          <Heading size="md" mb={5}>
            Report
          </Heading>

          <HStack spacing="4">
            <Card maxW="md" h={600} borderWidth={1.5} borderColor={"gray.200"}>
              <CardBody>
                <Image src={profilesData.SGA.img} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{profilesData.SGA.title}</Heading>
                  <Text>{profilesData.SGA.description}</Text>
                  <Heading color="orange.600" fontSize="l" mt={20}>
                    Reminder
                  </Heading>
                  <Text color="orange.600" fontSize="l">
                    {profilesData.SGA.advice.lifestyle}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="lg" h={600} borderWidth={1.5} borderColor={"gray.200"}>
              <CardBody>
                <Image
                  w={472}
                  h={265}
                  objectFit={"cover"}
                  src={profilesData.CSection.img}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{profilesData.CSection.title}</Heading>
                  <Text>{profilesData.CSection.description}</Text>
                  <Heading color="orange.600" fontSize="l">
                    Reminder
                  </Heading>
                  <Text color="orange.600" fontSize="l">
                    {profilesData.CSection.advice.lifestyle}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </HStack>
          <Box mt={5}></Box>

          <Heading size="md" mb={5}>
            Recommended Video
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={5}>
            <AspectRatio maxW="560px" maxH="400px" ratio={1}>
              <iframe src={profilesData.SGA.resources} allowFullScreen />
            </AspectRatio>
            <AspectRatio maxW="560px" maxH="400px" ratio={1}>
              <iframe src={profilesData.CSection.resources} allowFullScreen />
            </AspectRatio>
          </Grid>
          <Heading size="md" mb={5} mt={5}>
            Diet Plan
          </Heading>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "400px" }}
              src={"./healthy-diet.jpg"}
            />

            <Stack>
              <CardBody>
                <Heading size="md">{profilesData.SGA.title}</Heading>
                <Text py="2">{profilesData.SGA.description}</Text>
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Grab Your Diet Plan now!
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
      </Center>
      <Footer />
    </>
  );
}
