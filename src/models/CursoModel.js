const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CursoSchema = new Schema({
    id: ObjectId,
    nome_curso: String,
    aval_geral: Number,
    descricao: String,
    preco: Number,
    material: String,
    modulos: String
});

const CursoModel = mongoose.model('cursos', CursoSchema);

module.exports = CursoModel;