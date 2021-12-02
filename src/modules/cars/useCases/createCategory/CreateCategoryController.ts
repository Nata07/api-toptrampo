import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createSpecificationUsecase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, tags } = request.body;

    await this.createSpecificationUsecase.execute({
      name,
      description,
      tags,
    });

    return response.status(201).json({ message: 'ok' });
  }
}

export { CreateCategoryController };
