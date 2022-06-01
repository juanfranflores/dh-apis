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
      res.render("genresDetail.ejs", { genre });
    });
  },
};

module.exports = genresController;
