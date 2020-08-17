const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();
// const passport = require('passport');
// const GithubStrategy = require('passport-github2').Strategy;
const PORT = 3000;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

app.use('/auth/redirect', async (req, res) => {
  console.log(req.query);
  const requestToken = req.query.code;
  const response = await axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${requestToken}`,
  });
  const token = response.data.split('access_token=')[1].split('&')[0];
  try {
    const userInfo = await axios({
      method: 'get',
      url: 'https://api.github.com/user',
      headers: {
        Authorization: 'token ' + token,
      },
    });
    return res
      .cookie('user', userInfo.data.name, {
        httpOnly: true,
        // expires in 10 minutes
        maxAge: 600000,
      })
      .redirect(process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000');
  } catch (err) {
    throw new Error(err);
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
