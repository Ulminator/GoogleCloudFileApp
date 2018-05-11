const fs = require('fs');
const path = require('path');

const dir = path.resolve(__dirname, '../files');

function write(req, res) {
  const { content, filename } = req.query;
  fs.writeFile(`${dir}/${filename}`, content, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(`${dir}/${filename} was saved!`);
    }
  });
}

function list(req, res) {
  const fileList = [];
  fs.readdir(dir, (err, files) => {
    if (err) {
      res.status(500).send(err);
    } else {
      files.forEach((file) => {
        fileList.push(file);
      });
      res.status(200).send({ dir, fileList });
    }
  });
}

function erase(req, res) {
  const { filename } = req.query;
  fs.unlink(`${dir}/${filename}`, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(`${filename} was successfully erased!`);
    }
  });
}

function read(req, res) {
  const { filename } = req.query;
  fs.readFile(`${dir}/${filename}`, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

module.exports = {
  write,
  list,
  erase,
  read,
};
