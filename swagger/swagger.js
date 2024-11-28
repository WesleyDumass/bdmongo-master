const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'mbanco',
            version: '1.0.0',
            description: 'A simple express System API',
        },
        servers: [
            { url: `http://localhost:${process.env.PORT}/api` },
        ],
    },
    apis: ['../models/routes'],
};
const swaggerSpec = swaggerJsDoc(options);
const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
module.exports = setupSwagger;