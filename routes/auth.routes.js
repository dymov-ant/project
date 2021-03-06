const {check, validationResult} = require("express-validator")
const {Router} = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const User = require("../models/User")

const router = Router()

// /api/auth/register
router.post(
    "/register",
    [
        check("name", "Минимальная длина имени и фамилии 5 символов").isLength({min: 5}),
        check("email", "Некорректный email").isEmail(),
        check("password", "Минимальная длина пароля 6 символов").isLength({min: 6})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при регистрации!"
                })
            }

            const {name, email, password, birthDate} = req.body
            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({message: "Такой пользователь уже существует"})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = new User({name, email, password: hashedPassword, birthDate})
            await newUser.save()
            res.status(201).json({message: "Пользователь создан!"})
        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте ещё раз!"})
        }
    }
)

// /api/auth/login
router.post(
    "/login",
    [
        check("email", "Введите корректный email").isEmail(),
        check("password", "Введите пароль").exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некорректные данные при входе в систему!"
                })
            }

            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(400).json({message: "Пользователь не найден!"})
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({message: "Неверный пароль, попробуйте ещё раз!"})
            }
            const profile = user.toObject()
            profile.id = profile._id
            delete  profile._id
            delete profile.password
            const token = jwt.sign(
                {profile},
                config.get("jwtSecret"),
                {expiresIn: "1h"}
            )
            res.json({token})
        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте ещё раз!"})
        }
    }
)

module.exports = router