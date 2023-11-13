const activitiesValidateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json(
    { "message": "O campo name é obrigatório" }
  );

  if (name.length < 4) return res.status(400).json(
    { "message": "O campo name deve ter pelo menos 4 caracteres" }
  );
  next()
}

const activitiesValidatePrice = (req, res, next) => {
  const { price } = req.body;

  if (price === undefined) {
    return res.status(400).json(
      { message: 'O campo price é obrigatório' },
    );
  }

  if (price < 0 || typeof price !== 'number') {
    return res.status(400).json(
      { message: 'O campo price deve ser um número maior ou igual a zero' },
    );
  }

  next();
}

const validateDescription = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

const activitiesValidateDescription = (req, res, next) => {
  const { description } = req.body;

  return validateDescription(description, res, 'description')
    || validateDescription(description.createdAt, res, 'createdAt')
    || validateDescription(description.rating, res, 'rating')
    || validateDescription(description.difficulty, res, 'difficulty')
    || next();
};

const activitiesValidateCreatedAt = (req, res, next) => {
  const { createdAt } = req.body.description;

  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!isFormatDate.test(createdAt)) {
    return res.status(400).json(
      { message: 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'' },
    );
  }


  next();
};

module.exports = {
  activitiesValidateName,
  activitiesValidatePrice,
  activitiesValidateDescription,
  activitiesValidateCreatedAt
};