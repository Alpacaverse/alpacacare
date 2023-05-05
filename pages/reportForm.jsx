import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  Text,
  Select,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineUploadFile } from "react-icons/md";

const selectBoxes = [
  {
    id: "1",
    label: "Baby Presentation",
    options: ["Breech", "Cephalic", "Other"],
  },
  {
    id: "2",
    label: "Placenta Site Previa",
    options: ["No", "Yes"],
  },
  {
    id: "3",
    label: "Amniotic",
    options: ["Anhydramnios", "Normal"],
  },
  {
    id: "4",
    label: "Hypertension During Pregrancy",
    options: ["No", "Yes"],
  },
  {
    id: "5",
    label: "Diabetes During Pregrancy",
    options: ["No", "Yes"],
  },
  {
    id: "6",
    label: "Ethnicity",
    options: ["1", "2", "3", "4", "5"],
  },
];
const inputFields = [
  { id: "1", label: "Height" },
  { id: "2", label: "Biparietal Diameter" },
  { id: "3", label: "Head circumference" },
  { id: "4", label: "Transverse Cerebellar Diameter" },
  { id: "5", label: "Cisterna Magna" },
  { id: "6", label: "Estimated Fetal Weight" },
  { id: "7", label: "Nuchal Fold Thickness" },
  { id: "8", label: "Abdominal Circumference" },
  { id: "9", label: "Femur Length" },
  { id: "10", label: "Anterior Horn of Lateral Ventricle" },
  { id: "11", label: "Posterior Horn of Lateral Ventricle" },
  { id: "12", label: "Fetal Cerebral Hemisphere" },
  { id: "13", label: "Uterine Arterial Resistance Index" },
  { id: "14", label: "Uterine Arterial Pulsatility Index" },
  { id: "15", label: "Gestational Age Scan (week)" },
  { id: "16", label: "Gestational Age Scan (day)" },
];

export default function ReportForm() {
  return (
    <>
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
          {selectBoxes.map((box) => (
            <FormControl key={box.id} id={box.id}>
              <FormLabel>{box.label}</FormLabel>
              <Select>
                {box.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormControl>
          ))}
          {inputFields.map((field) => (
            <FormControl key={field.id} id={field.id}>
              <FormLabel>{field.label}</FormLabel>
              <Input type="text" />
            </FormControl>
          ))}
        </Grid>
      </Center>
      <Center my={6}>
        <Button
          colorScheme={"orange"}
          bg={"orange.400"}
          // rounded={"full"}
          width={"40%"}
          justifySelf={"end"}
          px={6}
          _hover={{
            bg: "orange.300",
          }}
        >
          Submit
        </Button>
      </Center>
    </>
  );
}
