import { Router } from 'express';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';

const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoriesController();

categoryRoutes.get('/', listCategoryController.handle);

categoryRoutes.post('/', createCategoryController.handle);

export { categoryRoutes };
