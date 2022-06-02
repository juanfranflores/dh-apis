const express = require("express");
const router = express.Router();
const genresApiController = require("../../controllers/api/genresApiController");

router.get("/genres", genresApiController.list);
router.get("/genres/detail/:id", genresApiController.detail);

router.post("/genres", genresApiController.store);
module.exports = router;
