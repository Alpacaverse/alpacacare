import { create } from "zustand";

export const useModelOutputStore = create((set) => ({
  gaData: null,
  modData: null,
  diaData: null,

  setGaData: (data) => set({ gaData: data }),
  setModData: (data) => set({ modData: data }),
  setDiaData: (data) => set({ diaData: data }),
}));
