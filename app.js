const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "content")));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.json({extended: true}));

app.use("/api/v1/auth", require("./routes/auth.routes"));
app.use("/api/v1/profile", require("./routes/profile.routes"));

async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}
start();

// const PORT = config.get("PORT") || 5000;
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));