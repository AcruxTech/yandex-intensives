const router = require("express").Router();
const { books, reviews, users } = require("./mock");
const { reply, getById } = require("./utils");

router.get("/books", (req, res, next) => {
  reply(res, books);
});

router.get("/categories", (req, res, next) => {
  reply(res, books);
});

router.get("/reviews", (req, res, next) => {
  const { id } = req.query;
  let result = reviews;
  if (id) {
    const book = getById(books)(id);
    if (book) {
      result = book.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.get("/users", (req, res, next) => {
  reply(res, users);
});

module.exports = router;
