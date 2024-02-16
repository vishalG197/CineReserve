//import;
require("dotenv").config();
require("express-async-errors");
const express = require("express");
const path = require("path");
const connectDB = require("./config/connDB");
const corsOptions = require("./config/corsOptions");
const morgan =require("morgan");
const cors =require("cors");
const cookieParser = require("cookie-parser")
const errorHandler = require("./middleware/errorHandler");
const logEvents= require("./middleware/logger")
// declaration;
const app = express();
const PORT = process.env.PORT || 5000;
const logFormat = '[:date[web]] :method :url :status :response-time ms - :res[content-length]';

console.log(process.env.NODE_ENV);

// connectDB();

//middleware;

app.use("/", express.static(path.join(__dirname, "public")));

app.use(morgan(logFormat));

app.use(cors(corsOptions));

app.use(express.json());

// app.use(cookieParser);
//Routes;
app.use("/", require("./routes/root"));
app.use("/users",require("./routes/usersRoutes"));
app.use("/auth",require("./routes/authRoutes"));
app.use("/bookings",require("./routes/bookingRoutes"))
app.use("/movie",require("./routes/movieRoutes"));
app.use("/seat",require("./routes/seatRoutes"));
app.use("/show",require("./routes/showRoutes"));


app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
      res.json({ message: '404 Not Found' })
  } else {
      res.type('txt').send('404 Not Found')
  }
})
app.use(errorHandler);
// connections;

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("connection to database successful");
    console.log("listening on port 5000");
  } catch (err) {
    console.log(err);
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
  }
});
