const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    fullname: { type: String, required: true },
    mobile: { type: Number, length: 10 },
    userid: { type: String, unique: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  await bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

userSchema.pre("findOneAndUpdate", async function (next) {
  try {
    if (this._update.password) {
      const hashed = await bcrypt.hash(this._update.password, 8);
      this._update.password = hashed;
    }
    next();
  } catch (err) {
    return next(err);
  }
});

// through checkPassword method, you can match password with encrypted password

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, same) => {
      if (err) return reject(err);
      resolve(same);
    });
  });
};

module.exports = mongoose.model("User", userSchema);
