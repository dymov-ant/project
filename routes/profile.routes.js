const {Router} = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const {check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const config = require("config");
const path = require("path");
const fs = require("fs");
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");

const router = Router();

// /api/v1/profile/
router.get("/", auth, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.query.id)) {
            return res.status(404).json({message: "Профиль не найден!"});
        }
        const profile = await User.findById(req.query.id).exec();
        if (!profile) {
            return res.status(404).json({message: "Профиль не найден!"});
        }
        const {_id, email, name, photo, status, birthDate, city, maritalStatus, education, job} = profile;
        res.json({
            id: _id,
            email,
            name,
            photo,
            status,
            birthDate: birthDate.toISOString().split("T")[0],
            city,
            maritalStatus,
            education,
            job
        });
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте ещё раз!'});
    }
});

router.put(
    "/edit",
    auth,
    [
        check("name", "Минимальная длина имени и фамилии 5 символов").isLength({min: 5}),
        check("email", "Некорректный email").isEmail()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные!"
                });
            }

            const newProfile = req.body;
            const candidate = await User.findOne({email: newProfile.email});
            if (candidate && candidate._id.toString() !== req.user.userId) {
                // if (candidate && candidate._id.toString() !== req.params.userId) {
                return res.status(400).json({message: "Такой email уже используется"});
            }
            await User.findOneAndUpdate({_id: req.user.userId}, newProfile);
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
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        console.log(file.mimetype)
        if (file.mimetype === "image/png" || file.mimetype === "image/ipg" || file.mimetype === "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
});

router.post(
    "/edit/photo",
    auth,
    upload.single("photo"),
    async (req, res) => {
        try {
            const fileData = req.file;
            if (!fileData) {
                return res.status(400).json({message: "Ошибка при загрузке фотографии"});
            }
            const user = await User.findById(req.user.userId);
            if (user.photo) {
                const oldPhoto = user.photo.split("/")[user.photo.split("/").length - 1];
                fs.unlink(path.join("content", "photos", oldPhoto), err => {
                    if (err) {
                        console.log(err);
                    }
                });
            }

            await User.findOneAndUpdate(
                {_id: req.user.userId},
                {photo: config.get("baseUrl") + path.join("/photos", fileData.filename)}
            );

            res.json({message: "Фотография обновлена"});

        } catch (e) {
            console.log(e)
            res.status(500).json({message: e.message || 'Что-то пошло не так, попробуйте ещё раз!'});
        }
    });

router.post(
    "/edit/password",
    auth,
    [
        check("password", "Минимальная длина пароля 6 символов").isLength({min: 6}),
        check("newPassword", "Минимальная длина нового пароля 6 символов").isLength({min: 6})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные"
                });
            }

            const {password, newPassword, newPassword2} = req.body;
            if (password === newPassword) {
                return res.status(400).json({message: "Старый и новый пароли совпадают!"});
            }
            if (newPassword !== newPassword2) {
                return res.status(400).json({message: "Новые пароли не совпадают!"});
            }
            const user = await User.findById(req.user.userId);
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({message: "Неверный пароль, попробуйте ещё раз!"});
            }

            const hashedPassword = await bcrypt.hash(newPassword, 12);
            await User.findOneAndUpdate(
                {_id: req.user.userId},
                {password: hashedPassword}
            );

            res.json({message: "Пароль изменен"});
        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте ещё раз!'});
        }
    });


router.post(
    "/edit/status",
    auth,
    async (req, res) => {
        try {
            const {status} = req.body;
            if (status.length > 40) {
                return res.status(400).json({message: "Максимальная длина статуса 40 символов"});
            }
            await User.findOneAndUpdate({_id: req.user.userId}, {status});
            res.json({message: "Статус обновлен"});
        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте ещё раз!'});
        }
    });

module.exports = router;