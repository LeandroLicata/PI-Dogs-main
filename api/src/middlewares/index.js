const validateDog = (req, res, next) => {
  const {
    name,
    min_height,
    max_height,
    min_weight,
    max_weight,
    min_life_span,
    max_life_span,
    image,
    temperament,
  } = req.body;
  if (!name) return res.status(400).json({ error: "missing name" });
  if (!/^[A-Za-z \-]*$/.test(name))
    return res.status(400).json({ error: "invalid name" });
  if (!min_height) return res.status(400).json({ error: "missing min height" });
  if (!max_height) return res.status(400).json({ error: "missing max height" });
  if (!/^(1[5-9]|[2-9][0-9]|100)$/.test(min_height))
    return res
      .status(400)
      .json({ error: "height must have values between 15 and 100" });
  if (!/^(1[5-9]|[2-9][0-9]|100)$/.test(max_height))
    return res
      .status(400)
      .json({ error: "height must have values between 15 and 100" });
  if (min_height >= max_height)
    return res
      .status(400)
      .json({ error: "max height must be higher than min height" });
  if (!min_weight) return res.status(400).json({ error: "missing min weight" });
  if (!max_weight) return res.status(400).json({ error: "missing max weight" });
  if (!/^(1?[1-9]|[2-8][0-9]|90)$/.test(min_weight))
    return res
      .status(400)
      .json({ error: "weight must have values between 1 and 90" });
  if (!/^(1?[1-9]|[2-8][0-9]|90)$/.test(max_weight))
    return res
      .status(400)
      .json({ error: "weight must have values between 1 and 90" });
  if (parseInt(min_height) >= parseInt(max_height))
    return res
      .status(400)
      .json({ error: "max weight must be higher than min weight" });
  if (!min_life_span)
    return res.status(400).json({ error: "missing min life span" });
  if (!max_life_span)
    return res.status(400).json({ error: "missing max life span" });
  if (!/^(?:[5-9]|1[0-9]|20)$/.test(min_life_span))
    return res
      .status(400)
      .json({ error: "life span must have values between 5 and 20" });
  if (!/^(?:[5-9]|1[0-9]|20)$/.test(max_life_span))
    return res
      .status(400)
      .json({ error: "life span must have values between 5 and 20" });
  if (parseInt(min_life_span) >= parseInt(max_life_span))
    return res
      .status(400)
      .json({ error: "max life span must be higher than min life span" });
  if (image) {
    if (
      !/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?\.(?:jpeg|jpg|png|gif)$/.test(
        image
      )
    )
      return res.status(400).json({ error: "invalid image url" });
  }
  if (!temperament)
    return res
      .status(400)
      .json({ error: "you must select at least one temperament" });
  if (temperament.length > 6)
    return res
      .status(400)
      .json({ error: "you can only select a maximum of six temperaments" });
  next();
};

module.exports = { validateDog };
