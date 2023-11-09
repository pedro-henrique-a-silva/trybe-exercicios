const fs = require('fs').promises;
const path = require('path');

const readFile = async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, './data.json'), 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return `Erro ao ler o arquivo: ${err.message}`;
  }
};

const writeFile = async (data) => {
  try {
    await fs.writeFile(path.join(__dirname, './data.json'), JSON.stringify(data));
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

module.exports = {
  readFile,
  writeFile,
};