const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TutorSchema = new Schema ({
    id: ObjectId,
    especializacao: String,
    aval_media: Number,
    descricao: String,
    nome: String,
    idade: Number,
    email: String
});

const TutorModel = mongoose.model('tutor', TutorSchema);

module.exports = TutorModel;