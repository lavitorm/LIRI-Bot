console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

//This file will be used by the `dotenv` package to set what are known 
//as environment variables to the global `process.env` object in node. 
//These are values that are meant to be specific to the computer that node 
//is running on, and since we are gitignoring this file, they won't be pushed 
//to github &mdash; keeping our API key information private.