const {Router} = require("express");
const User = require("../models/User");

const router = Router();

// /api/v1/profile/
router.get("/", async (req, res) => {
    try {
        const _id = req.query.id;
        const profile = await User.findOne({_id});
        if (!profile) {
            res.status(400).json({message: "Профиль не найден!"});
        }
        const {email, name, photo, status, birthDate, city, maritalStatus, education, job, posts} = profile;
        res.json({_id, email, name, photo, status, birthDate, city, maritalStatus, education, job, posts});
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте ещё раз!'});
    }
})

module.exports = router;