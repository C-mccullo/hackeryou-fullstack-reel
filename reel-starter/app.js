const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const Movie = require("./movieModel");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/reel");

// This serves all files placed in the /public
// directory (where gulp will build all React code)
app.use(express.static('public'));

// Also serve everything from our assets directory (static
// assets that you want to manually include)
app.use(express.static('assets'));


app.use(bodyParser.json());

// Include your own logic here (so it has precedence over the wildcard
// route below)

// This route serves your index.html file (which
// initializes React)

// ROUTES

app.get("/api/movies", (req, res) => {
  Movie.find().then((docs) => {
    res.status(200).send(docs);
  })
  .catch((err) => {
    res.status(400).send(err);
  })
})

app.get("/api/movies/:movieId", (req, res) => {
  const movieId = req.params.movieId;

  Movie.findById(movieId).then((docs) => {
    res.status(200).send(docs);
  })
    .catch((err) => {
      res.status(400).send(err);
    })
})

app.post('/api/movies', (req, res) => {
  const movieModel = new Movie();
  const movie = Object.assign(movieModel, req.body);
  movie.save()
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.put("/api/movies/:id", (req, res) => {
  const model = req.body;
  const movie = Movie.findById(req.params.id)
    .then((doc) => {
      const updateMovie = Object.assign(doc, model);
      updateMovie.save()
      .then((doc) => {
        res.status(200).send(doc)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
    })
    .catch((err)=> {
      res.send(400).send(err)
    })
})

app.delete("/api/movies/:id", (req, res) => {
  const movieId = req.params.id;
  Movie.remove({ _id: movieId }).then((doc) => {
    res.status(200).send(doc);
  })
  .catch((err) => {
    res.status(400).send(err);
  })
})

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Start your server, and listen on port 8080.
app.listen(8080, function() {
  console.log("App is now listening on port 8080!");
})
