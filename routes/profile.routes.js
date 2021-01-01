const {Router} = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const User = require("../models/User");

const router = Router();

// /api/v1/profile/
router.get("/", async (req, res) => {
    try {
        const profile = await User.findById(req.query.id);
        if (!profile) {
            return res.status(400).json({message: "Профиль не найден!"});
        }
        const {email, name, photo, status, birthDate, city, maritalStatus, education, job, posts} = profile;
        res.json({email, name, photo, status, birthDate, city, maritalStatus, education, job, posts});
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте ещё раз!'});
    }
});

router.put("/", async (req, res) => {
    try {
        const {id, ...newProfile} = req.body;
        const candidate = await User.findOne({email: newProfile.email});
        if (candidate && candidate._id.toString() !== id) {
            return res.status(400).json({message: "Такой email уже используется"});
        }
        await User.findOneAndUpdate({_id: id}, newProfile);
        res.json({message: "Профиль обновлен"});
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте ещё раз!'});
    }
});

const storage = multer.diskStorage({
    destination: "content/photos",
    filename: (req, file, next) => {
        next(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
});
const upload = multer({storage: storage});

router.post(
    "/photo/:userId",
    upload.single("photo"),
    async (req, res) => {
        try {
            const fileData = req.file;
            if (!fileData) {
                return res.status(400).json({message: "Ошибка при загрузке фотографии"});
            }
            const user = await User.findById(req.params.userId);
            fs.unlink(path.join("content", user.photo), err => {
                if (err) {
                    console.log(err);
                }
            });

            await User.findOneAndUpdate(
                {_id: req.params.userId},
                {photo: path.join("photos", fileData.filename)}
            );

            res.json({message: "Фотография обновлена"});

        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте ещё раз!'});
        }
    });

module.exports = router;