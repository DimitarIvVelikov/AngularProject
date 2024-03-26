const { isAuth } = require("../middleware/authMiddleware");
const trainingProgramService = require("../services/trainingProgramService");

const router = require("express").Router();

// const bsonToJson = (data) => {
//   return JSON.parse(JSON.stringify(data));
// };
router.get("/", async (req, res) => {
  try {
    const trainingPrograms = await trainingProgramService.getTrainingPrograms();

    res.status(200).send(trainingPrograms);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const trainingProgram = await trainingProgramService.getTrainingProgram(
      req.params.id
    );
    res.status(200).send(trainingProgram);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.post("/", isAuth, async (req, res) => {
  const trainingProgramReq = req.body;
  trainingProgramReq.owner = req.user._id;
  try {
    const trainingProgram = await trainingProgramService.createTrainingProgram(
      trainingProgramReq
    );
    res.status(200).send(trainingProgram);
  } catch (error) {
    res.status(400).send({ message: error.message + "WTF" });
  }
});

router.put("/:id", isAuth, async (req, res) => {
  //TODO Implement proper middleware/helper func
  try {
    const trainingProgram = await trainingProgramService.getTrainingProgram(id);
    const owner = trainingProgram.owner;

    if (req?.user._id != owner) {
      res.status(401).send("Not Authorized");
      return;
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }

  const trainingProgram = req.body;
  const id = req.params.id;

  try {
    const updatedTrainingProgram =
      await trainingProgramService.updateTrainingProgram(id, trainingProgram);
    res.status(200).send(updatedTrainingProgram);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.delete("/:id", isAuth, async (req, res) => {
  const id = req.params.id;
  //TODO Implement proper middleware/helper func
  try {
    const trainingProgram = await trainingProgramService.getTrainingProgram(id);
    const owner = trainingProgram.owner;

    if (req?.user._id != owner) {
      res.status(401).send("Not Authorized");
      return;
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }

  try {
    const deletedTrainingProgram =
      await trainingProgramService.deleteTrainingProgram(id);
    res.status(200).send(deletedTrainingProgram);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = trainingProgramController = router;
