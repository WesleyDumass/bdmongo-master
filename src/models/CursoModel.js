const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  nome_curso: { type: String, required: true },
  avaliacao_geral: { type: Number, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  materia: { type: String, required: true },
  qtd_alunos: { type: Number, required: true },
  modulos: [
    {
      _id: { type: String, required: true },
      nome: { type: String, required: true },
      duracao_estimada: { type: Number, required: true },
      descricao: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Curso', CursoSchema);
