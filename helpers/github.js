const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  axios.get(options.url, options)
    .then((response)=>{
      console.log(response)
    })
  //not sure if this is what this was intended for
}
// console.log('THIS TIME >>>>>>>>>>>>>>>>>>>>>>>>>>>>')
// getReposByUsername("sleepisgood1")
module.exports.getReposByUsername = getReposByUsername;