import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';

let router = express.Router();

// ADD OR EDIT MOVIE
router.post('/', (req, res) => {
  let movie = req.body;
  movie._id = new mongodb.ObjectID(req.body._id);
  database.db.collection('movies').save(req.body).then((newMovie) => {
    res.json(newMovie);
  })
});

// GET MOVIES
router.get('/', (req, res) => {
  database.db.collection('movies').find().toArray().then((movies)=>{
    res.json(movies);
  })
});

// DELETE MOVIE
router.delete('/:id', (req, res) => {
  let movieId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('movies').remove({_id:movieId}).then(()=> {
    res.sendStatus(200);
  });
});

export default router;
