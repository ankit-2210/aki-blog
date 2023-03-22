const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

const Connection = require("./db/conn");
const Routes = require("./routers/route");

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

Connection();

if (process.env.NODE_ENV == "production") {
    const path = require('path');
    app.get('/', (req, res) => {
        app.use(express.static(path.resolve(__dirname, 'client', 'build')));
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

    // app.use(express.static("client/build"));
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})
