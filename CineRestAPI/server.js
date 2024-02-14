//import;
require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/connDB");
const corsOptions = require("./config/corsOptions");

// declaration;
const app = express();
const PORT = process.env.PORT || 5000;

console.log(process.env.NODE_ENV);

// connectDB();

//middleware;

app.use("/", express.static(path.join(__dirname, "public")));

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

//Routes;
app.use("/", require("./routes/root"));

// connections;

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("connection to database successful");
    console.log("listening on port 5000");
  } catch (error) {
    console.log(error);
  }
});
