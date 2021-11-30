import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, description, tags } = request.body;

    this.createSpecificationUseCase.execute({
      name,
      description,
      tags,
      created_at: new Date(),
    });

    return response.status(201).json({ message: 'ok' });
  }
}

export { CreateSpecificationController };
