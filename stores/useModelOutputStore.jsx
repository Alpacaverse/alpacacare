import { create } from "zustand";

export const useModelOutputStore = create((set) => ({
  gaData: null,
  modData: null,

  setGaData: (data) => set({ gaData: data }),
  setModData: (data) => set({ modData: data }),
}));
