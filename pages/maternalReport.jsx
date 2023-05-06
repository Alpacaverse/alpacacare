import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ChatBotIcon from "../components/ChatbotIcon";

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
  VStack,
  Divider,
} from "@chakra-ui/react";
import { profiles } from "../lib/profiles";
import { riskIndi } from "../lib/riskIndi";
import { useRouter } from "next/router";

const data = [
  {
    isRecommended: true,
    imageURL: "/doctor.jpg",
    name: "Pregnancy Doctor",
    price: 150.0,
    tags: ["Pregnancy Care", "Medical Consultation"],
  },
  {
    isRecommended: false,
    imageURL: "/nutritionist.jpg",
    name: "Nutritionist",
    price: 100.0,
    tags: ["Nutrition Plan", "Meal Planning", "Healthy Eating"],
  },
  {
    isRecommended: false,
    imageURL: "/psychologist.jpg",
    name: "Psychologist",
    price: 150.0,
    tags: ["Mental Health", "Stress Management", "Counseling"],
  },
];

export default function Report() {
  const profilesData = profiles();
  const router = useRouter();
  const riskData = riskIndi();

  const { risk } = router.query;
  const riskLevel =
    parseInt(risk) === 0 ? "Low" : parseInt(risk) === 1 ? "Medium" : "High";

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
            Maternal Health Risk Report
          </Text>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "500px" }}
              src={riskData[riskLevel]["img"]}
            />

            <Stack>
              <CardBody>
                <Heading size="md">Current Situation:</Heading>
                <Text py="2">{riskData[riskLevel]["description"]}</Text>
                <Divider
                  my="5"
                  color={useColorModeValue("gray.700", "gray.200")}
                />
                <Heading size="md" color="orange.600" fontSize="lg">
                  Lifestyle Recommendation
                </Heading>
                <Text color="orange.600" fontSize="md">
                  {riskData[riskLevel]["advice"]["lifestyle"]}
                </Text>
                <Divider
                  my="5"
                  color={useColorModeValue("gray.700", "gray.200")}
                />
                <Heading size="md" color="orange.600" fontSize="lg">
                  Diet Recommendation
                </Heading>
                <Text color="orange.600" fontSize="md">
                  {riskData[riskLevel]["advice"]["diet"]}
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant="solid" colorScheme="orange">
                  {riskData[riskLevel]["resources"][0]}
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          <Heading size="xl" my={10}>
            Here are some{" "}
            <Box as={"span"} color={"pr.400"}>
              consultation packages
            </Box>{" "}
            that we offer!
          </Heading>
          <Text size="md" fontWeight={"semibold"}>
            Monthly subscription is available.
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
      <ChatBotIcon />;
    </>
  );
}
