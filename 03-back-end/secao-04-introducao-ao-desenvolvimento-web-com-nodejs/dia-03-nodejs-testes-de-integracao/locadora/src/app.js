const express = require('express');
const { readFile, writeFile } = require('./fsUtils');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const videos = await readFile();
  console.log(videos);
  return res.status(200).send(videos);
});

app.get('/movies/:id', async (req, res) => {
  const videos = await readFile();
  const { id: videoID } = req.params;
  const video = videos.find((vid) => vid.id === Number(videoID));

  if (!video) {
    return res.status(200).send({ message: 'filme não encontrado' });
  }

  return res.status(200).send(video);
});

app.post('/movies', async (req, res) => {
  const videos = await readFile();
  const newVideo = { ...req.body, id: videos.length + 1 };
  videos.push(newVideo);
  writeFile(videos);
  res.status(200).send(newVideo);
});

module.exports = app;