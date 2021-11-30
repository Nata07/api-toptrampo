import { Request, Response } from 'express';
import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const allCategory = this.listCategoriesUseCase.execute();

    return response.json(allCategory);
  }
}

export { ListCategoriesController };
