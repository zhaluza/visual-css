const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();
const authRouter = require('./router/authRouter');
// const passport = require('passport');
// const GithubStrategy = require('passport-github2').Strategy;
const PORT = 3000;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
