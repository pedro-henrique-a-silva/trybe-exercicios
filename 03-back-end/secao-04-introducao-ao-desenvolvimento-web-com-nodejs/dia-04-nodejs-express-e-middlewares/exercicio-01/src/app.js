const express = require('express');
const {
  activitiesValidateName, 
  activitiesValidatePrice,
  activitiesValidateDescription,
  activitiesValidateCreatedAt
} = require('./middlewares/activities')

const app = express();

const database = [];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/activities',
  activitiesValidateDescription,
  activitiesValidatePrice ,
  activitiesValidateName,
  activitiesValidateCreatedAt, 
  (req, res) => {
  database.push(req.body)
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
});


module.exports = app;