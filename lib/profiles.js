export const profiles = () => {
  const profiles = {
    SGA: {
      title: "Small for Gestational Age (SGA)",
      img: "./SGA.jpg",
      description:
        "This baby is predicted to be smaller than expected for their gestational age. ",
      reasons: [
        "Poor nutrition",
        "Problems with the placenta",
        "Genetic factors",
        "Maternal smoking",
      ],
      advice: {
        diet: "Increase nutrient-dense foods, protein and calories intake.",
        lifestyle:
          "Get regular prenatal care, rest enough and exercise regularly.",
      },
      resources: ["https://www.youtube.com/embed/8sj-qQ3vJy4"],
    },
    AGA: {
      title: "Appropriate Gestational Age (AGA)",
      img: "./healthy-baby.jpeg",
      description:
        " The baby is healthy and appropriate for their gestational age. ",
      reasons: [
        "Good nutrition",
        "Healthy placenta",
        "No underlying medical conditions",
        "No exposure to harmful substances",
      ],
      advice: {
        diet: "Mantain your balanced diet and consult with a healthcare provider about any necessary supplements to support a healthy pregnancy",
        lifestyle:
          "Get regular prenatal care, rest enough and exercise regularly.",
      },
      resources: ["https://www.youtube.com/embed/8sj-qQ3vJy4"],
    },
    CSection: {
      title: "Caesarean Section (C-Section)",
      img: "./c-section.jpg",
      description:
        "You are more suited for a C-Section which is delivery through an incision in the mother's abdomen and uterus.",
      reasons: [
        "Fetal distress",
        "Placenta previa",
        "Breech presentation",
        "Maternal health conditions",
        "Previous C-section",
        "Multiple pregnancies",
        "Obstructed labor",
      ],
      advice: {
        diet: "Maintain a healthy weight and follow your healthcare provider's instructions regarding food and drink intake prior to surgery.",
        lifestyle:
          "Discuss any medications, supplements, or medical conditions with your healthcare provider before the surgery. Follow post-operative care instructions to promote healing and recovery.",
      },
      resources: ["https://www.youtube.com/embed/3M5jUDGmXcM"],
    },
    Vaginal: {
      title: "Vaginal Delivery",
      img: "./vaginal-delivery.jpg",
      description:
        "You are suited to deliver the baby through the vaginal canal during labor.",
      reasons: [
        "No medical contraindications",
        "Baby is in the head-down position",
        "Mother's pelvic size is adequate",
      ],
      advice: {
        diet: "Maintain a healthy and balanced diet throughout pregnancy to support fetal growth and development. Stay hydrated during labor.",
        lifestyle:
          "Attend childbirth education classes and develop a birth plan with your healthcare provider. ",
      },
      resources: ["https://www.youtube.com/embed/6m9Q27BrRj0"],
    },
  };
  return profiles;
};
