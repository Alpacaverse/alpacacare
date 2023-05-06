export const riskIndi = () => {
  const riskIndi = {
    High: {
      title: "High Risk",
      img: "./high-risk.jpg",
      description:
        "You are at high risk for complications during pregnancy and childbirth. This could be due to pre-existing medical conditions, multiple pregnancies, or other factors.",
      reasons: [
        "Pre-existing medical conditions (e.g. diabetes, hypertension)",
        "Multiple pregnancies (e.g. twins, triplets)",
        "Advanced maternal age (35 or older)",
        "Previous pregnancy complications (e.g. pre-eclampsia, premature birth)",
      ],
      advice: {
        diet: "Maintain a healthy diet with plenty of fruits, vegetables, whole grains, and lean protein. Avoid high-fat, high-sugar foods.",
        lifestyle:
          "Get plenty of rest, stay hydrated, and avoid smoking, alcohol, and drugs. Follow your healthcare provider's recommendations for exercise and activity.",
      },
      resources: [
        "Consult with a pregnancy doctor now!",
        "Attend all recommended prenatal appointments",
        "Consider genetic counseling",
      ],
    },
    Medium: {
      title: "Medium Risk",
      img: "./medium-risk.jpg",
      description:
        "Your pregnancy is progressing normally and you are at an appropriate gestational age for your due date.",
      reasons: ["Normal pregnancy progression"],
      advice: {
        diet: "Maintain a healthy diet with plenty of fruits, vegetables, whole grains, and lean protein. Avoid high-fat, high-sugar foods.",
        lifestyle:
          "Get plenty of rest, stay hydrated, and avoid smoking, alcohol, and drugs. Follow your healthcare provider's recommendations for exercise and activity.",
      },
      resources: [
        "Consult with a pregnancy doctor now!",
        "Stay informed about the signs and symptoms of complications",
      ],
    },
    Low: {
      title: "Low risk",
      img: "./low-risk.jpg",
      description:
        "You are at low risk for complications during pregnancy and childbirth.",
      reasons: [
        "No pre-existing medical conditions",
        "Singleton pregnancy",
        "Maternal age under 35",
        "Previous uncomplicated pregnancies",
      ],
      advice: {
        diet: "Maintain a healthy diet with plenty of fruits, vegetables, whole grains, and lean protein. Avoid high-fat, high-sugar foods.",
        lifestyle:
          "Get plenty of rest, stay hydrated, and avoid smoking, alcohol, and drugs. Follow your healthcare provider's recommendations for exercise and activity.",
      },
      resources: [
        "Get some supplementary advise from Nutritionist now!",
        "Stay informed about the signs and symptoms of complications",
      ],
    },
  };
  return riskIndi;
};
