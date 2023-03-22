const mongoose = require("mongoose");
const grid = require("gridfs-stream");

const url = "http://localhost:8000";

let gfs;
const conn = mongoose.connection;
conn.once("open", () => {
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection("fs");
})

const uploadImage = async (req, res) => {
    try {
        if (!req.file)
            return res.status(404).json("File not found");

        const imageUrl = `${url}/file/${req.file.filename}`;
        res.status(200).json(imageUrl);
    }
    catch (error) {
        res.status(500).json(error);
    }

}


// chunk to png/jpeg format
const getImage = async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    }
    catch (error) {
        res.status(500).json(error);
    }

}

module.exports.uploadImage = uploadImage;
module.exports.getImage = getImage;
