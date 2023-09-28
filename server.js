const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

//Rate Limiting
const limiter = rateLimit({
    windowMs: 10*60*1000, //Time frame in milli seconds, here it is 10 minutes
    max: 100 // Max number of calls allowed in 10 seconds
});

app.use(limiter);
app.set("trust proxy", 1);

//Set Static Folder
app.use(express.static("public"));

//Routes
app.use("/api", require("./routes/index.js"));

//Enable CORS
app.use(cors);

app.listen(PORT, () => {
    console.log(` [LOG] Connected to Port : ${PORT}`)
});