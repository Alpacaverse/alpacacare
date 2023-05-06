import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
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

const data = [
  {
    isRecommended: true,
    imageURL: "/chicken_salad_bowl.jpg",
    name: "Chicken Salad Bowl",
    price: 15.0,
    tags: ["Vegetables", "Chicken", "Corn"],
  },
  {
    isRecommended: false,
    imageURL: "/japanese_salad_bowl.jpg",
    name: "Japanese Salad Bowl",
    price: 17.5,
    tags: ["Edamame", "Sweet Corn", "Mushrooms"],
  },
  {
    isRecommended: true,
    imageURL: "/steak_salad_bowl.jpg",
    name: "Steak Salad Bowl",
    price: 17.0,
    tags: ["Sirloin Steak", "Mango", "Mint"],
  },
];

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
          <Heading size="xl" my={5}>
            Here are some{" "}
            <Box as={"span"} color={"orange.400"}>
              packaged meals
            </Box>{" "}
            that we offer!
          </Heading>
          <Text size="md" fontWeight={"semibold"}>
            Monthly subscription is available too.
          </Text>
          <Stack direction={"row"}>
            {data.map((product, index) => (
              <ProductCard
                key={product.imageURL + index}
                isRecommended={product.isRecommended}
                imageURL={product.imageURL}
                name={product.name}
                price={product.price}
                tags={product.tags}
              />
            ))}
          </Stack>
        </Box>
      </Center>
      <Footer />
    </>
  );
}
