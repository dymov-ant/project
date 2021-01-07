const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    body: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    createdDate: {type: Date, default: Date.now},
    likes: [
        {
            user: {type: Schema.Types.ObjectId, ref: "User", required: true},
            createdDate: {type: Date, default: Date.now}
        }
    ]
});

const populationFields = "user posts.user";

schema.post("save", async doc => {
    await doc.populate(populationFields).execPopulate();
});

function populateFields() {
    this.populate(populationFields);
}

schema.pre("find", populateFields);
schema.pre("findOne", populateFields);
schema.pre("findOneAndUpdate", populateFields);

module.exports = mongoose.model("Post", schema);