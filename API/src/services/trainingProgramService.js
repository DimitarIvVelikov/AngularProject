const TrainingProgram = require("../model/TrainingProgram");

const createTrainingProgram = async (trainingProgram) => {
  const createdProgram = await TrainingProgram.create({ ...trainingProgram });
  return createdProgram;
};

const getTrainingPrograms = async () => {
  const trainingPrograms = await TrainingProgram.find();
  return trainingPrograms;
};

const getTrainingProgram = async (id) => {
  const trainingProgram = await TrainingProgram.findById(id);
  return trainingProgram;
};

const updateTrainingProgram = async (id, trainingProgram) => {
  const updatedTrainingProgram = await TrainingProgram.findByIdAndUpdate(
    id,
    trainingProgram,
    { runValidators: true }
  );
  return updatedTrainingProgram;
};

const deleteTrainingProgram = async (id) => {
  const deletedTrainingProgram = await TrainingProgram.findByIdAndDelete(id);
  return deletedTrainingProgram;
};
const trainingProgramService = {
  createTrainingProgram,
  getTrainingPrograms,
  getTrainingProgram,
  updateTrainingProgram,
  deleteTrainingProgram,
};

module.exports = trainingProgramService;
