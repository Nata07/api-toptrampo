import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoryUseCase } from './ListCategoryUseCase';

const categoryRepository = CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoryUseCase(categoryRepository);

const listCategoryController = new ListCategoriesController(
  listCategoryUseCase,
);

export { listCategoryController };
