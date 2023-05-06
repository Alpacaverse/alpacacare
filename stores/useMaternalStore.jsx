import { create } from "zustand";

export const useMaternalStore = create((set) => ({
  inputFields: [
    {
      id: "age",
      label: "Age",
    },
    {
      id: "systolic_bp",
      label: "Systolic Blood Pressure",
    },
    {
      id: "diastolic_bp",
      label: "Diastolic Blood Pressure",
    },
    {
      id: "bs",
      label: "Blood Sugar Level",
    },
    {
      id: "body_temp",
      label: "Body Temperature",
    },
    {
      id: "heart_rate",
      label: "Heart Rate",
    },
  ],
  maternalInput: null,
  maternalData: {},
  setMaternalInput: (x) => set({ maternalInput: x }),
  setMaternalData: (x) => {
    set({ maternalData: x });
  },
}));
