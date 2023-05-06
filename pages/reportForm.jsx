import Header from "../components/Header";
import Footer from "../components/Footer";
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
import { MdOutlineUploadFile } from "react-icons/md";
import { useReportStore } from "../stores";
const apiHelper = require("../lib/apiHelper");

export default function ReportForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [
    inputFields,
    setReportData,
    fileInput,
    setFileInput,
    formattedReportData,
  ] = useReportStore((state) => [
    state.inputFields,
    state.setReportData,
    state.fileInput,
    state.setFileInput,
    state.formattedReportData,
  ]);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = (evt) => {
      const data = JSON.parse(evt.target.result);
      setFileInput(data);
    };
  };

  async function handleSubmit() {
    const data = {};
    // foreach id of inputFields.label == element id, get value and return
    inputFields.forEach((element) => {
      const val = document.getElementById(element.id).value;
      data[element.id] = val;
    });

    setReportData(data);
    setIsLoading(true);
  }

  useEffect(() => {
    if (fileInput) {
      for (const key in fileInput) {
        document.getElementById(key).value = fileInput[key];
      }
    }
  }, [fileInput]);

  useEffect(() => {
    let gaData;
    let modData;
    if (formattedReportData) {
      apiHelper
        .gestationalAgePrediction(formattedReportData)
        .then((res) => (gaData = res.prediction))
        .then(() => apiHelper.deliveryModePrediction(formattedReportData))
        .then((res) => (modData = res.prediction))
        .then(() => setIsLoading(false))
        .then(
          () => (window.location.href = `/report?ga=${gaData}&mod=${modData}`)
        );
    }
  }, [formattedReportData]);

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
            <Text fontWeight={"semibold"} fontSize={"5xl"} color={"orange.400"}>
              Fill In Your Medical Results{" "}
            </Text>
            <Button
              colorScheme={"orange"}
              bg={"orange.400"}
              width={"40%"}
              justifySelf={"end"}
              alignSelf={"center"}
              px={6}
              _hover={{
                bg: "orange.300",
              }}
              rightIcon={<MdOutlineUploadFile />}
              onClick={handleButtonClick}
            >
              Upload Report
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileInputChange}
                style={{ display: "none" }}
              />
            </Button>

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
                  <Input type="number" step="0.01" />
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
      <Footer />
    </>
  );
}
