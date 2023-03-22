const Comment = require("../models/commentSchema");

const newComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body);
        comment.save();

        res.status(200).json("Comment saved successfully");
    }
    catch (error) {
        res.status(500).json(error);
    }
}

const getComment = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.id });
        res.status(200).json(comments);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

const deleteComment = async (req, res) => {
    try {
        // console.log(req.params.id);
        const comment = await Comment.findById(req.params.id);
        await comment.delete();

        res.status(200).json('comment deleted successfully');
    }
    catch (error) {
        res.status(500).json(error);
    }
}

module.exports.newComment = newComment;
module.exports.getComment = getComment;
module.exports.deleteComment = deleteComment;