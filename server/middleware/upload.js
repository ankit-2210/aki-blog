const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');


const storage = new GridFsStorage({
    url: `mongodb+srv://ankit:ankit@blog.shvff.mongodb.net/BLOG?retryWrites=true&w=majority`,
    options: { useUnifiedTopology: true, useNewUrlParser: true },

    file: (req, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

const upload = multer({ storage });

module.exports = { upload }

