const express = require("express");
const mongoose = require("mongoose");
const app = express();
const route = require("./routes/route");

app.use(express.json());

mongoose.set('strictQuery', false);
mongoose
  .connect(
    "mongodb+srv://ShubhamChaturvedi:9555047172@mongodbwithshubham.z3dowao.mongodb.net/test",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((errors) => {
    console.log(errors.message);
  });



app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on PORT " + (process.env.PORT || 3000));
});
