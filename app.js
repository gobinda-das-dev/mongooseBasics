const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/create', async (req, res) => {
  let createdUser = await userModel.create({
    name: 'sumit',
    age: 12,
    email: 'sumit@example.com',
    username: 'sumit'
  });

  res.send(createdUser);
})

app.get('/update', async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    {name: 'gobinda'},
    {name: 'gobinda runa das'},
    {new: true}
  );

  res.send(updatedUser);
})

app.get('/read', async (req, res) => {
  let users = await userModel.findOne({
    username: 'sumit'
  });

  res.send(users);
})

app.get('/delete', async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({
    name: 'gobinda'
  });

  res.send(deletedUser);
})

app.listen(3000);