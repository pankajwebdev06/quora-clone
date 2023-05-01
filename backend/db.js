const mongoose = require("mongoose");
const url =
  "mongodb+srv://pankajwebdev06:2NxnEtNbbYbPikMW@cluster4.dny8cvo.mongodb.net/?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      // useCreateIndex: true,
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.log("Error: ", error));
};
