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

const foodData = [
  {
    isRecommended: true,
    imageURL: "/food-packages.jpg",
    name: "One-Week Food Package",
    price: 90.0,
    tags: ["Japanese Salad Bowl", "Chicken Bowl", "Steak Salad Bowl"],
  },
  {
    isRecommended: false,
    imageURL: "/japanese_salad_bowl.jpg",
    name: "Japanese Salad Bowl",
    price: 17.5,
    tags: ["Edamame", "Sweet Corn", "Mushrooms"],
  },
  {
    isRecommended: false,
    imageURL: "/steak_salad_bowl.jpg",
    name: "Steak Salad Bowl",
    price: 17.0,
    tags: ["SirloiSteakn ", "Mango", "Mint"],
  },
];

const supplementData = [
  {
    isRecommended: true,
    imageURL: "/vitamin.jpg",
    name: "Vitamin C",
    price: 65.0,
    tags: ["Immune System", "Antioxidant", "Collagen Production"],
  },
  {
    isRecommended: false,
    imageURL: "/calcium.jpg",
    name: "Calcium",
    price: 70.0,
    tags: ["Bone Health", "Teeth Health", "Nerve Function"],
  },
  {
    isRecommended: false,
    imageURL: "/omega.jpg",
    name: "Omega-3 Fish Oil",
    price: 60.0,
    tags: ["Heart Health", "Brain Function", "Joint Health"],
  },
];

const specialistData = [
  {
    isRecommended: true,
    imageURL: "/doctor.jpg",
    name: "Pregnancy Doctor",
    price: 150.0,
    tags: ["Pregnancy Care", "Medical Consultation"],
  },
  {
    isRecommended: true,
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
  return (
    <>
      <Header />
      <Center>
        <Box p={6}>
          <Heading size="xl" my={6} color={"orange.400"}>
            Specialist{" "}
            <Box as={"span"} color={"blackAlpha.600"}>
              Services
            </Box>{" "}
          </Heading>
          <Text mb="-1" size="md" fontWeight={"semibold"}>
            One-time payment is available, or grab a monthly subscription at a
            discounted rate!
          </Text>
          <Stack direction={"row"}>
            {specialistData.map((product, index) => (
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

          <Heading size="xl" my={6} color={"orange.400"}>
            Food{" "}
            <Box as={"span"} color={"blackAlpha.600"}>
              Packages
            </Box>{" "}
          </Heading>
          <Stack direction={"row"}>
            {foodData.map((product, index) => (
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

          <Heading size="xl" my={6} color={"orange.400"}>
            Dietary{" "}
            <Box as={"span"} color={"blackAlpha.600"}>
              Supplements
            </Box>{" "}
          </Heading>
          <Stack direction={"row"}>
            {supplementData.map((product, index) => (
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
