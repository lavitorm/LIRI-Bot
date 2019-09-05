//LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will 
//be a command line node app that takes in parameters and gives back data.

//require the .env file 
require("dotenv").config();
//code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");
//code to access my Spotify keys information and initialize Spotify
var Spotify = require("node-spotify-api");
var Spotify = new Spotify(keys.Spotify);
//ombd and bands in town api's
var ombd = (keys.ombd);
var bandsintow = (keys.bandsintow);
//access to the NPM files
var axios = require("axios");
var request = require("request");
var moment = require("moment");
var fs = require("fs");
//command line arguments
const [node, file, ...args] = process.argv;
//movies (if no name is provided, will display "Mr. Nobody")
if (args[0] === "movie.this") {
    if (args[1] === undefined) {
        getMovie("Mr. " + "Nobody");
    }
    else {
        getMovie(args.slice(1).join("+"));
    }
};
//Spotify songs (if no song name is provided, will display "The Sign")
if (args[0] === "spotify-this-song") {
    if (args[1] === undefined) {
        spotifySong("The " + "Sign");
    }
    else {
        var songTitle = (args.slice(1).join("+"));
        spotifySong(songTitle);
    }
};
//command "do-what-it-says"
if (args[0] === "do-what-it-says") {
    fs.readFile("random.txt"), "UTF-8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        dataArr = data.split(",");
        if (dataArr[0] === "movie-this") {
            getMovie("Mr. " + "Nobody");
        }
        else {
            getMovie(dataArr[1].split().join("+"));
        }
    };
    if (dataArr[0] === "spotify-this-song") {
        if (dataArr[1] === undefined) {
            spotifySong(dataArr[1])
        }
    };
};
//function to get spotify songs
function spotifySong(songName) {
    spotifySong.search({ type: "track", query: songName, limit: 1 }, function (err, data) {
        if (err) {
            return console.log("error occured: " + err);
        }
        data.tracks.items.forEach(function (element) {
            console.log("");
            console.log(`Artist: ${element.artists[0].name}`);
            console.log(`Song: ${songName}`);
            console.log(`Artist: ${element.preview_url}`);
            console.log(`Artist: ${element.album.name}`);

        });
    });
};
//function to get movies info
function getMovies(movieName) {
    axios
        .get(`http://www.omdbapi.com/?t=${movieName}&apikey=trilogy`)
        .then(function (movie) {
            console.log("");
            console.log(`Title: ${movie.data.Title}`);
            console.log(`Released: ${movie.data.Year}`);
            console.log(`IMDB Rating: ${movie.dataRatings[0].value}`);
            console.log(`Plot: ${movie.data.Plot}`);
            console.log(`Cast: ${movie.data.Actors}`);
        })
        .catch(function (err) {
            console.log(err);
        });
};
