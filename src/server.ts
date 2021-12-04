import 'reflect-metadata';

import expres from 'express';
import { categoryRoutes } from './routes/category.routes';
import { specificationRoutes } from './routes/specification.routes';

import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json';

import './database';

import './shared/container';

const app = expres();

app.use(expres.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use('/categories', categoryRoutes);
app.use('/specification', specificationRoutes);

app.listen(3333, () => console.log('Server ON'));
