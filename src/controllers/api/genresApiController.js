const db = require("../../database/models");

const genresController = {
  list: (req, res) => {
    db.Genre.findAll().then((genres) => {
      res.status(200).json({
        meta: {
          status: 200,
          total: genres.length,
          url: req.originalUrl,
        },
        data: genres,
      });
    });
  },
  detail: (req, res) => {
    db.Genre.findByPk(req.params.id).then((genre) => {
      res.status(200).json({
        meta: {
          status: 200,
          url: req.originalUrl,
        },
        data: genre,
      });
    });
  },
  store: (req, res) => {
    db.Genre.create(req.body).then((genre) => {
      res.status(200).json({
        meta: {
          status: 200,
          url: req.originalUrl,
        },
        data: genre,
      });
    });
  },
};

module.exports = genresController;
