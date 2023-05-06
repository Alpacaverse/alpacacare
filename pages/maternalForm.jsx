import Header from "../components/Header";
import Footer from "../components/Footer";
import PremiumModal from "../components/modal/PremiumModal";
import {
  Form,
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  Text,
  Select,
  Center,
  Box,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { useMaternalStore, usePremiumUserStore } from "../stores";
const apiHelper = require("../lib/apiHelper");

export default function MaternalForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trialUsed, setTrialUsed] = usePremiumUserStore((state) => [
    state.trialUsed,
    state.setTrialUsed,
  ]);

  const [inputFields, setMaternalData, maternalInput, maternalData] =
    useMaternalStore((state) => [
      state.inputFields,
      state.setMaternalData,
      state.maternalInput,
      state.maternalData,
    ]);

  const fileInputRef = useRef(null);

  async function handleSubmit() {
    if (trialUsed) {
      setIsModalOpen(true);
      return;
    } else {
      setTrialUsed(true);
    }
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
    if (maternalInput) {
      for (const key in maternalInput) {
        document.getElementById(key).value = maternalInput[key];
      }
    }
  }, [maternalInput]);

  //   change api helper function
  //   useEffect(() => {
  //     let riskData;
  //     if (maternalData) {
  //       apiHelper
  //         .gestationalAgePrediction(maternalData)
  //         .then((res) => (riskData = res.prediction))
  //         .then(() => setIsLoading(false))
  //         .then(() => (window.location.href = `/maternalReport?=${riskData}`));
  //     }
  //   }, [maternalData]);

  return (
    <>
      <Header />
      <PremiumModal
        isOpen={isModalOpen}
        isClose={() => setIsModalOpen(false)}
      />
      <Box p={15}>
        <Center>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={6}
            my={4}
            w={"90%"}
          >
            <Text fontWeight={"semibold"} fontSize={"5xl"} color={"orange.400"}>
              Maternal Assessment{" "}
            </Text>
            <Text></Text>
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
