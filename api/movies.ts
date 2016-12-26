import * as express from 'express';
import * as mongodb from 'mongodb';
import database from '../db';

let router = express.Router();

// ADD OR EDIT MOVIE
router.post('/', (req, res) => {
  database.db.collection('movies').save(req.body).then((newMovie) => {
    res.json(newMovie);
  })
});


export default router;
