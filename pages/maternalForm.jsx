import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  Text,
  Select,
  Center,
  Box,
  GridItem,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useMaternalStore } from "../stores";
const apiHelper = require("../lib/apiHelper");

export default function MaternalForm() {
  const [isLoading, setIsLoading] = useState(false);

  const [inputFields, maternalData, setMaternalData] = useMaternalStore(
    (state) => [state.inputFields, state.maternalData, state.setMaternalData]
  );

  async function handleSubmit() {
    const data = {};
    // foreach id of inputFields.label == element id, get value and return
    inputFields.forEach((element) => {
      const val = document.getElementById(element.id).value;
      data[element.id] = val;
    });

    setMaternalData(data);
    setIsLoading(true);
  }

  useEffect(() => {
    let score;
    if (maternalData && maternalData !== {}) {
      apiHelper
        .healthRiskPrediction(maternalData)
        .then((res) => (score = res.prediction))
        .then(() => setIsLoading(false))
        .then(() => (window.location.href = `/maternalReport?score=${score}`));
    }
  }, [maternalData]);

  return (
    <>
      <Header />
      <Box p={15}>
        <Center>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={6}
            my={4}
            w={"90%"}
          >
            <GridItem colSpan={2}>
              <Text
                fontWeight={"semibold"}
                fontSize={"5xl"}
                color={"orange.400"}
              >
                Maternal Assessment{" "}
              </Text>
            </GridItem>
            {inputFields.map((field) => {
              return field.options ? (
                <FormControl key={field.id} id={field.id}>
                  <FormLabel>{field.label}</FormLabel>
                  <Select>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <FormControl key={field.id} id={field.id}>
                  <FormLabel>{field.label}</FormLabel>
                  <Input type="number" step="0.1" />
                </FormControl>
              );
            })}
          </Grid>
        </Center>
        <Center my={6}>
          <Button
            colorScheme={"orange"}
            bg={"orange.400"}
            type="submit"
            width={"40%"}
            justifySelf={"end"}
            px={6}
            _hover={{
              bg: "orange.300",
            }}
            onClick={handleSubmit}
            isLoading={isLoading}
          >
            Submit
          </Button>
        </Center>
      </Box>
      <Box position="fixed" bottom="0" width="100%">
        <Footer />
      </Box>
    </>
  );
}
