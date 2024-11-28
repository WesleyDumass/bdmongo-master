const { Router } = require ('express');

const CursoController = require ('./Controllers/CursoController');
const TutorController = require ('./Controllers/TutorController');
const routes = Router();

routes.get('/health', (req, res) => {
    return res.status(200).json({ message: "Server is running..." });
});

// ROTAS DO CURSO

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Banco:
 *       type: object
 *       required:
 *         - nome_curso
 *         - avaliacao_geral
 *         - descricao
 *         - preco
 *         - materia
 *         - qtd_aluno
 *         - 
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the record
 *         cod_banco:
 *           type: integer
 *           description: Bank identification code
 *         desc_banco:
 *           type: string
 *           description: Bank description
 *       example:
 *         cod_banco: 123
 *         desc_banco: Banco do Brasil
 */

/**
 * @swagger
 * tags:
 *   name: Banco
 *   description: API for managing Banco
 */

/**
 * @swagger
 * /banco:
 *   post:
 *     summary: Create a new Banco record
 *     tags: [Banco]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Banco'
 *     responses:
 *       201:
 *         description: Successfully created a new Banco record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Banco'
 *       500:
 *         description: Server error
 */
routes.post('/cursos', CursoController.store);

/**
 * @swagger
 * /banco:
 *   get:
 *     summary: List all Banco records
 *     tags: [Banco]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of Banco records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Banco'
 */
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