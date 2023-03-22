const express = require("express");

const createpost = require("../controller/post-controller").createpost;
const getAllPosts = require("../controller/post-controller").getAllPosts;
const getPost = require("../controller/post-controller").getPost;
const updatePost = require("../controller/post-controller").updatePost;
const deletePost = require("../controller/post-controller").deletePost;

const uploadImage = require("../controller/image-controller").uploadImage;
const getImage = require("../controller/image-controller").getImage;
const upload = require("../middleware/upload").upload;

const newComment = require("../controller/comment-controller").newComment;
const getComment = require("../controller/comment-controller").getComment;
const deleteComment = require("../controller/comment-controller").deleteComment;

const userSignUp = require("../controller/user-controller").userSignUp;
const userLogin = require("../controller/user-controller").userLogin;
const aboutData = require("../controller/user-controller").aboutData;
const contactData = require("../controller/user-controller").contactData;

const authenticate = require("../middleware/authenticate").authenticate;

const router = express.Router();


router.post("/create", createpost);
router.get("/posts", getAllPosts);
router.get("/post/:id", getPost);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);

router.post("/file/upload", upload.single('file'), uploadImage);
router.get("/file/:filename", getImage);

router.post("/comment/new", newComment);
router.get("/comments/:id", getComment);
router.delete("/comment/delete/:id", deleteComment);

router.post("/signup", userSignUp);
router.post("/login", userLogin);

router.get("/about", aboutData);

router.post("/contacts", contactData);

module.exports = router;