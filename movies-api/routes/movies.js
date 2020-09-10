const express = require('express');

const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (error) {
      console.log(error);
    }
  });
  router.get('/:movieId', async function (req, res, next) {
    try {
      const movie = await Promise.resolve(moviesMock[0]);
      res.status(200).json({
        data: movie,
        message: 'movie retrieved',
      });
    } catch (error) {
      console.log(error);
    }
  });
  router.post('/', async function (req, res, next) {
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(201).json({
        data: createMovieId,
        message: 'movie created',
      });
    } catch (error) {
      console.log(error);
    }
  });
  router.put('/:movieId', async function (req, res, next) {
    try {
      const updateMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: updateMovieId,
        message: 'movie updated',
      });
    } catch (error) {
      console.log(error);
    }
  });
  router.delete('/:movieId', async function (req, res, next) {
    try {
      const deletedMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted',
      });
    } catch (error) {
      console.log(error);
    }
  });
}

module.exports = moviesApi;
