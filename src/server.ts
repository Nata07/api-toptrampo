import expres from 'express';
import { categoryRoutes } from './routes/category.routes';
import { specificationRoutes } from './routes/specification.routes';

const app = expres();
app.use(expres.json());

app.use('/categories', categoryRoutes);
app.use('/specification', specificationRoutes);

app.listen(3333, () => console.log('Server ON'));
