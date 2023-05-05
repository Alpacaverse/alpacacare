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
import { MdOutlineUploadFile } from "react-icons/md";
import { useReportStore } from "../stores/useReportStore";

export default function ReportForm() {
  const [inputFields, setReportData] = useReportStore((state) => [
    state.inputFields,
    state.setReportData,
  ]);

  function handleSubmit() {
    const data = {};
    // foreach id of inputFields.label == element id, get value and return
    inputFields.forEach((element) => {
      const val = document.getElementById(element.id).value;
      data[element.id] = val;
    });
    setReportData(data);
  }

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
            >
              Upload Report
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
          >
            Submit
          </Button>
        </Center>
      </Box>
      <Footer />
    </>
  );
}
