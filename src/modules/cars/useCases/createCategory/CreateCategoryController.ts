import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from '../createSpacification/CreateSpecificationUseCase';

class CreateCategoryController {
  constructor(private createSpecificationUsecase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description, tags } = request.body;

    this.createSpecificationUsecase.execute({
      name,
      description,
      tags,
      created_at: new Date(),
    });

    return response.status(201).json({ message: 'ok' });
  }
}

export { CreateCategoryController };
