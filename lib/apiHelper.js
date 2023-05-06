import parseJson from "parse-json";

export function mapJsonToSequence(object, sequence) {
  const result = [];
  sequence.forEach((key) => {
    result.push(object[key]);
  });
  return result;
}

export async function gestationalAgePrediction(data) {
  // Status
  // 0: Appropriate-Gestational-Age (AGA) / Healthy (good)
  // 1: Small-for-gestational-age (SGA) (bad)
  const sequence = [
    "mother_age",
    "ethnicity",
    "biparietal_diameter",
    "head_circumference",
    "transverse_cerebellar_diameter",
    "cisterna_magna",
    "estimated_fetal_weight",
    "nuchal_fold_thickness",
    "abdominal_circumference",
    "femur_length",
    "anterior_horn_of_lateral_ventricle",
    "posterior_horn_of_lateral_ventricle",
    "fetal_cerebral_hemisphere",
    "uterine_arterial_resistance_index",
    "uterine_arterial_pulsatility_index",
    "gestational_age_scan_week",
    "gestational_age_scan_day",
  ];
  const mappedData = mapJsonToSequence(data, sequence);
  const inputData = { input: mappedData };
  const res = await fetch("http://localhost:5000/predict/gestational-age", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(inputData),
  }).then((res) => res.json());

  return res;
}

export async function deliveryModePrediction(data) {
  //     Mod
  // 0: Vaginal Delivery
  // 1: Lower segment Caesarean section
  // 2: Others
  const sequence = [
    "mother_age",
    "mum_height",
    "presentation_breech",
    "presentation_cephalic",
    "presentation_other",
    "placenta_site_previa",
    "amniotic_anhydramnios",
    "amniotic_normal",
    "hypertension_nil",
    "hypertension_pih",
    "diabetes_gdm",
    "diabetes_nil",
  ];
  const mappedData = mapJsonToSequence(data, sequence);
  const inputData = { input: mappedData };

  const res = await fetch("http://localhost:5000/predict/delivery-mode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(inputData),
  }).then((res) => res.json());

  return res;
}

export async function healthRiskPrediction(data) {
  // 0: Low
  // 1: Medium
  // 2: High
  const sequence = [
    "age",
    "systolic_bp",
    "diastolic_bp",
    "bs",
    "body_temp",
    "heart_rate",
  ];
  const mappedData = mapJsonToSequence(data, sequence);
  const inputData = { input: mappedData };

  const res = await fetch("http://localhost:5000/predict/health-risk", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(inputData),
  }).then((res) => res.json());

  return res;
}
