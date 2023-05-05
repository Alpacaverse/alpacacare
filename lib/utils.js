export function formatReportData(rawData) {
  const body = {
    mother_age: rawData.mother_age ? parseFloat(rawData.mother_age) : 34,
    mum_height: rawData.mum_height ? parseFloat(rawData.mum_height) : 157,
    presentation_breech: rawData.presentation_type === "Breech" ? 1 : 0,
    presentation_cephalic: rawData.presentation_type === "Cephalic" ? 1 : 0,
    presentation_other: rawData.presentation_type === "Other" ? 1 : 0,
    placenta_site_previa: rawData.placenta_site === "Yes" ? 1 : 0,
    amniotic_anhydramnios: rawData.amniotic === "Anhydramnios" ? 1 : 0,
    amniotic_normal: rawData.amniotic === "Normal" ? 1 : 0,
    hypertension_nil: rawData.hypertension === "No" ? 1 : 0,
    hypertension_pih: rawData.hypertension === "Yes" ? 1 : 0,
    diabetes_gdm: rawData.diabetes === "Yes" ? 1 : 0,
    diabetes_nil: rawData.diabetes === "No" ? 1 : 0,

    ethnicity: parseInt(rawData.ethnicity),
    birapietal_diameter: rawData.biparietal_diameter
      ? parseFloat(rawData.biparietal_diameter)
      : 52.592795,
    head_circumference: rawData.head_circumference
      ? parseFloat(rawData.head_circumference)
      : 191.749856,
    transverse_cerebellar_diameter: rawData.transverse_cerebellar_diameter
      ? parseFloat(rawData.transverse_cerebellar_diameter)
      : 22.500865,
    cisterna_magna: rawData.cisterna_magna
      ? parseFloat(rawData.cisterna_magna)
      : 5.678386,
    estimated_fetal_weight: rawData.estimated_fetal_weight
      ? parseFloat(rawData.estimated_fetal_weight)
      : 435.893372,
    nuchal_fold_thickness: rawData.nuchal_fold_thickness
      ? parseFloat(rawData.nuchal_fold_thickness)
      : 4.508179,
    abdominal_circumference: rawData.abdominal_circumference
      ? parseFloat(rawData.abdominal_circumference)
      : 165.356772,
    femur_length: rawData.femur_length
      ? parseFloat(rawData.femur_length)
      : 36.521037,
    anterior_horn_of_lateral_ventricle:
      rawData.anterior_horn_of_lateral_ventricle
        ? parseFloat(rawData.anterior_horn_of_lateral_ventricle)
        : 6.513862,
    posterior_horn_of_lateral_ventricle:
      rawData.posterior_horn_of_lateral_ventricle
        ? parseFloat(rawData.posterior_horn_of_lateral_ventricle)
        : 6.242392,
    fetal_cerebral_hemisphere: rawData.fetal_cerebral_hemisphere
      ? parseFloat(rawData.fetal_cerebral_hemisphere)
      : 25.444553,
    uterine_arterial_resistance_index: rawData.uterine_arterial_resistance_index
      ? parseFloat(rawData.uterine_arterial_resistance_index)
      : 0.601121,
    uterine_arterial_pulsatility_index:
      rawData.uterine_arterial_pulsatility_index
        ? parseFloat(rawData.uterine_arterial_pulsatility_index)
        : 0.983501,
    gestational_age_scan_week: rawData.gestational_age_scan_week
      ? parseFloat(rawData.gestational_age_scan_week)
      : 21.412104,
    gestational_age_scan_day: rawData.gestational_age_scan_day
      ? parseFloat(rawData.gestational_age_scan_day)
      : 3.247839,
  };

  return body;
}
