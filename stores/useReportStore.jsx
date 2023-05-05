import { create } from "zustand";
const utils = require("../lib/utils");

export const useReportStore = create((set) => ({
  inputFields: [
    {
      id: "mother_age",
      label: "Age",
      options: null,
    },
    {
      id: "mum_height",
      label: "Height",
      options: null,
    },
    {
      id: "presentation_type",
      label: "Baby Presentation",
      options: ["Cephalic", "Breech", "Other"],
    },
    {
      id: "placenta_site_previa",
      label: "Placenta Site Previa",
      options: ["No", "Yes"],
    },
    {
      id: "amniotic",
      label: "Amniotic",
      options: ["Normal", "Anhydramnios"],
    },
    {
      id: "hypertension",
      label: "Hypertension During Pregrancy",
      options: ["No", "Yes"],
    },
    {
      id: "diabetes",
      label: "Diabetes During Pregrancy",
      options: ["No", "Yes"],
    },
    {
      id: "ethnicity",
      label: "Ethnicity",
      options: ["1", "2", "3", "4", "5"],
    },
    {
      id: "biparietal_diameter",
      label: "Biparietal Diameter",
      options: null,
    },
    {
      id: "head_circumference",
      label: "Head circumference",
      options: null,
    },
    {
      id: "transverse_cerebellar_diameter",
      label: "Transverse Cerebellar Diameter",
      options: null,
    },
    {
      id: "cisterna_magna",
      label: "Cisterna Magna",
      options: null,
    },
    {
      id: "estimated_fetal_weight",
      label: "Estimated Fetal Weight",
      options: null,
    },
    {
      id: "nuchal_fold_thickness",
      label: "Nuchal Fold Thickness",
      options: null,
    },
    {
      id: "abdominal_circumference",
      label: "Abdominal Circumference",
      options: null,
    },
    {
      id: "femur_length",
      label: "Femur Length",
      options: null,
    },
    {
      id: "anterior_horn_of_lateral_ventricle",
      label: "Anterior Horn of Lateral Ventricle",
      options: null,
    },
    {
      id: "posterior_horn_of_lateral_ventricle",
      label: "Posterior Horn of Lateral Ventricle",
      options: null,
    },
    {
      id: "fetal_cerebral_hemisphere",
      label: "Fetal Cerebral Hemisphere",
      options: null,
    },
    {
      id: "uterine_arterial_resistance_index",
      label: "Uterine Arterial Resistance Index",
      options: null,
    },
    {
      id: "uterine_arterial_pulsatility_index",
      label: "Uterine Arterial Pulsatility Index",
      options: null,
    },
    {
      id: "gestational_age_scan_week",
      label: "Gestational Age Scan (week)",
      options: null,
    },
    {
      id: "gestational_age_scan_day",
      label: "Gestational Age Scan (day)",
      options: null,
    },
  ],
  reportData: {},
  formattedReportData: [],
  setReportData: (x) => {
    set({ reportData: x });
    set({ formattedData: utils.formatReportData(x) });
    console.log(utils.formatReportData(x));
  },
}));
