const { isAuth } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});
// delete this
router.get("/authorize-test", isAuth, (req, res) => {
  res.send("You are authorized");
});

module.exports = homeController = router;
