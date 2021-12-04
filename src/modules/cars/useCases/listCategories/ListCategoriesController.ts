import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoryUseCase);

    const allCategory = await listCategoriesUseCase.execute();
    return response.json(allCategory);
  }
}

export { ListCategoriesController };
