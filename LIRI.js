//In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. 
//However, while SIRI is a Speech Interpretation and Recognition Interface, 
//LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will 
//be a command line node app that takes in parameters and gives you back data.

   // Read and set environment variables
   require("dotenv").config();

   //code required to import the `keys.js` file and store it in a variable
   var keys = require("./keys.js");
   //code to access my Spotify keys information
   var spotify = new Spotify(keys.spotify);