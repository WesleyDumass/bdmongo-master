const { Router } = require ('express');

const CursoController = require ('./Controllers/CursoController');

const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "Server is running..." });
});

routes.post('/cursos', CursoController.store);
routes.get('/cursos', CursoController.index);
routes.get('/cursos/:id', CursoController.show);
routes.put('/cursos/:id', CursoController.update);
routes.delete('/cursos/:id', CursoController.destroy);

module.exports = routes;