import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, tags } = request.body;

    const createCategoriesUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoriesUseCase.execute({
      name,
      description,
      tags,
    });

    return response.status(201).json({ message: 'ok' });
  }
}

export { CreateCategoryController };
