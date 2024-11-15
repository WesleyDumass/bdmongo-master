const { Router } = require ('express');

const CursoController = require ('./Controllers/CursoController');
const TutorController = require ('./Controllers/TutorController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "Server is running..." });
});

// ROTAS DO CURSO
routes.post('/cursos', CursoController.store);
routes.get('/cursos', CursoController.index);
routes.get('/cursos/:id', CursoController.show);
routes.put('/cursos/:id', CursoController.update);
routes.delete('/cursos/:id', CursoController.destroy);

//ROTAS TUTOR
routes.post('/tutor', TutorController.store);
routes.get('/tutor', TutorController.index);
routes.get('/tutor/:id', TutorController.show);
routes.put('/tutor/:id', TutorController.update);
routes.delete('/tutor/:id', TutorController.destroy);

module.exports = routes;