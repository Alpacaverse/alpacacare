import { create } from "zustand";
const utils = require("../lib/utils");

export const useReportStore = create((set) => ({
  reportData: {},
  formattedData: [],
  setReportData: (x) => {
    set({ reportData: x });
    set({ formattedData: utils.formatUseReportFeatures(x) });
  },
}));
