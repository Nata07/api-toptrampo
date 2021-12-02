import { Request, Response } from 'express';
import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const allCategory = await this.listCategoriesUseCase.execute();

    return response.json(allCategory);
  }
}

export { ListCategoriesController };
