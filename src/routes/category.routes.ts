import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories';

const categoryRoutes = Router();

categoryRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoryRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

export { categoryRoutes };
