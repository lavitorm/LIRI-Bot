**LIRI-Bot**

Language Interpretation and Recognition Interface. LIRI is a command line Node app that takes in parameters and gives back data.

**Use**

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

The file "liri.js" will send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs.

"liri.js" can take in one the following commands:

1. **concert-this**
`node liri.js concert-this <artist/band name here>`

* This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

2. **spotify-this-song**
`node liri.js spotify-this-song '<song name here>'`

* This will show the following information about the song in your terminal/bash window:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
* If no song is provided then your program will default to "The Sign" by Ace of Base.

*Song information is retrieved from the Spotify API.*

3. **movie-this**
`node liri.js movie-this '<movie name here>'`

* This will output the following information to your terminal/bash window:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
* If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
* It's on Netflix!

*Movie information is retrieved from the OMDB API.*

4. **do-what-it-says**
 `node liri.js do-what-it-says`

* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

*The text in randim.txt can be edited and saved to test out the feature for movie-this and concert-this.*

**Notes:**

1. A `.gitignore` file was created to tell git not to track, and thus not to commit the following files to Github:

```node_modules
.DS_Store
.env
```
`.env` is the file that stores the Spotify keys.

2. Resources

*Visual Studio Code - text editor

*Node.js

*APIs/Packages:

Spotify (https://developer.spotify.com/)
OMDB (http://www.omdbapi.com)
Bands In Town (http://www.artists.bandsintown.com/bandsintown-api)
NPM Packages:

Node-Spotify-API (https://www.npmjs.com/package/node-spotify-api)
Axios (https://www.npmjs.com/package/axios)
Moment (https://www.npmjs.com/package/moment)
DotEnv (https://www.npmjs.com/package/dotenv)













