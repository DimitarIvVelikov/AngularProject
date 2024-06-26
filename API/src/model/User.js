const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    signUpList: [
      {
        type: mongoose.Types.ObjectId,
        ref: "TrainingProgram",
      },
    ],
    createdList: [
      {
        type: mongoose.Types.ObjectId,
        ref: "TrainingProgram",
      },
    ],
  },
  { timestamps: { createdAt: "created_at" } }
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.virtual("rePassword").set(function (value) {
  if (value !== this.password) {
    throw new Error("Password mismatch");
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
