import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Center,
  Grid,
  AspectRatio,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Box,
  HStack,
  Button,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { profiles } from "../lib/profiles";
import { useRouter } from "next/router";

export default function Report() {
  const profilesData = profiles();
  const router = useRouter();
  const { ga, mod } = router.query;

  const G = parseInt(ga) === 1 ? "SGA" : "AGA";
  const birth = parseInt(mod) === 1 ? "CSection" : "Vaginal";

  return (
    <>
      <Header />
      <Center>
        <Box p={6}>
          <Text
            as={"h2"}
            color={useColorModeValue("gray.700", "gray,300")}
            fontSize={"4xl"}
            fontWeight={"semibold"}
            textAlign={"center"}
            mb={10}
            border={useColorModeValue("solid 2px black", "solid 2px white")}
            borderRadius={"xl"}
            p={10}
          >
            Mode of Delivery (MOD) & Gestational Age (GA) Report
          </Text>
          <HStack spacing="4" alignItems={"center"} justifyContent={"center"}>
            <Card maxW="md" h={600} borderWidth={1.5} borderColor={"gray.200"}>
              <CardBody>
                <Image
                  w={472}
                  h={265}
                  objectFit={"cover"}
                  src={profilesData[G]["img"]}
                  borderRadius="lg"
                  alt={""}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="lg">{profilesData[G]["title"]}</Heading>
                  <Text>{profilesData[G]["description"]}</Text>
                  <Divider />
                  <Heading mt={10} color="orange.600" fontSize="lg">
                    REMINDER
                  </Heading>
                  <Text color="orange.500" fontSize="md">
                    {profilesData[G]["advice"]["lifestyle"]}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="md" h={600} borderWidth={1.5} borderColor={"gray.200"}>
              <CardBody>
                <Image
                  w={472}
                  h={265}
                  alt={"C-Section"}
                  objectFit={"cover"}
                  src={profilesData[birth]["img"]}
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="lg">{profilesData[birth]["title"]}</Heading>
                  <Text>{profilesData[birth]["description"]}</Text>
                  <Divider color={useColorModeValue("gray.700", "gray.200")} />
                  <Heading color="orange.600" fontSize="lg">
                    REMINDER
                  </Heading>
                  <Text color="orange.600" fontSize="md">
                    {profilesData[birth]["advice"]["lifestyle"]}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </HStack>
          <Box py={5}>
            <Heading size="md" my={5}>
              Recommended Videos
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={5}>
              <AspectRatio maxW="560px" maxH="400px" ratio={1}>
                <iframe src={profilesData[G]["resources"]} allowFullScreen />
              </AspectRatio>
              <AspectRatio maxW="560px" maxH="400px" ratio={1}>
                <iframe
                  src={profilesData[birth]["resources"]}
                  allowFullScreen
                />
              </AspectRatio>
            </Grid>
          </Box>
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
              alt={"Healthy Diet"}
            />

            <Stack>
              <CardBody>
                <Heading size="md">{profilesData[G]["title"]}</Heading>
                <Text py="2">{profilesData[G]["description"]}</Text>
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
