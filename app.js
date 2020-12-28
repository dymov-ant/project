const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({extended: true}));

app.use("/api/auth", require("./routes/auth.routes"));

async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}
start();

const PORT = config.get("PORT") || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));