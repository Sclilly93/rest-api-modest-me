// measurementMiddleware.js

const validateMeasurements = (req, res, next) => {
    const {
      name,
      email,
      neck,
      chest,
      shoulder,
      rightSleeve,
      leftSleeve,
      bicep,
      wrist,
      waist,
      hip,
      frontJacket,
      frontChest,
      backWidth,
      shoulderWidthRight,
      shoulderWidthLeft,
      fullBackLength,
      halfBackLength,
      trouserWaist,
      trouserOutseam,
      trouserInseam,
      crotch,
      thigh,
      knee,
      rightFullSleeve,
      leftFullSleeve,
      /* Add other measurements here */
    } = req.body;
  
    // Example validation: Ensure required fields are present
    if (
      !name ||
      !email ||
      !neck ||
      !chest ||
      !shoulder ||
      !rightSleeve ||
      !leftSleeve ||
      !bicep ||
      !wrist ||
      !waist ||
      !hip ||
      !frontJacket ||
      !frontChest ||
      !backWidth ||
      !shoulderWidthRight ||
      !shoulderWidthLeft ||
      !fullBackLength ||
      !halfBackLength ||
      !trouserWaist ||
      !trouserOutseam ||
      !trouserInseam ||
      !crotch ||
      !thigh ||
      !knee ||
      !rightFullSleeve ||
      !leftFullSleeve
      /* Add other validations as needed */
    ) {
      return res.status(400).json({ error: 'Invalid measurements' });
    }
  
    // If all validations pass, attach the measurements to the request object
    req.measurements = {
      name,
      email,
      neck,
      chest,
      shoulder,
      rightSleeve,
      leftSleeve,
      bicep,
      wrist,
      waist,
      hip,
      frontJacket,
      frontChest,
      backWidth,
      shoulderWidthRight,
      shoulderWidthLeft,
      fullBackLength,
      halfBackLength,
      trouserWaist,
      trouserOutseam,
      trouserInseam,
      crotch,
      thigh,
      knee,
      rightFullSleeve,
      leftFullSleeve,
      /* Add other measurements here */
    };
    next();
  };
  
  module.exports = { validateMeasurements };
  
  