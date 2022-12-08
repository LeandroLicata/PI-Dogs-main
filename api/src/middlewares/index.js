const validateDog = (req, res, next) => {
  const { name, height, weight, temperament } = req.body;
  if (!name) return res.status(400).json({ error: "missing name" });
  if (!height) return res.status(400).json({ error: "missing height" });
  if (!weight) return res.status(400).json({ error: "missing weight" });
  if (!temperament) return res.status(400).json({ error: "missing temperament" });
  next();
};

module.exports = { validateDog };