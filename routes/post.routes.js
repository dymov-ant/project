const {Router} = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/auth.middleware");

const router = Router();

// /api/v1/posts
router.get("/", auth, async (req, res) => {
    try {
        const posts = await Post.find({user: req.query.userId}).sort({createdDate: -1});
        res.json({posts});
    } catch (e) {
        res.status(500).json({message: "Что-то пошло не так, попробуйте ещё раз!"});
    }
});

// /api/v1/posts/add
router.post("/add", auth, async (req, res) => {
    try {
        const {body} = req.body;
        const post = new Post({body, user: req.user.id});
        await post.save();
        res.status(201).json({post});
    } catch (e) {
        res.status(500).json({message: "Что-то пошло не так, попробуйте ещё раз!"});
    }
});

// /api/v1/posts/delete/:_id
router.delete("/delete/:_id", auth, async (req, res) => {
    try {
        const {_id} = req.params;
        const user = req.user.id;
        await Post.findOneAndRemove({_id, user});
        res.json({message: "Пост удален"});
    } catch (e) {
        res.status(500).json({message: "Что-то пошло не так, попробуйте ещё раз!"});
    }
});

// /api/v1/posts/:postId/likes
router.post("/:postId/likes", auth, async (req, res) => {
    const post = await Post.findById(req.params.postId);
   if (!post) {
       return res.status(404).json({message: "Пост не найден"});
   }
   const user = req.user.id;
   if (post.likes.find(like => like.user.toString() === user)) {
        return req.status(400).json({message: "Лайк уже поставлен"});
   }
   post.likes.unshift({user});
   await post.save();
   res.json({post});
});

// /api/v1/posts/:postId/likes/:likeId
router.delete("/:postId/likes/:likeId", auth, async (req, res) => {
    const post = await Post.findById(req.params.postId);
    if (!post) {
        return res.status(404).json({message: "Пост не найден"});
    }
    const likeIndex = post.likes.findIndex(like => like._id.toString() === req.params.likeId);
    if (likeIndex < 0) {
        return res.status(404).json({message: "Лайк не найден"});
    }
    post.likes.splice(likeIndex, 1);
    await post.save();
    res.json({post});
});

module.exports = router;