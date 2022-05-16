const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    imgUrl: { type: Array, required: true },
    location: { type: String },
    description: { type: String },
  },
  { timestamps: true } // it will automatically created some extra key-values like createdAt, updatedAt
);

module.exports = mongoose.model("Project", projectSchema);
