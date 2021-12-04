import { inject, injectable } from 'tsyringe';
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';

interface IRequest {
  name: string;
  description: string;
  tags: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationCategory: SpecificationRepository,
  ) {}

  async execute({ name, description, tags }: IRequest): Promise<void> {
    const specificationExists = await this.specificationCategory.findByName(
      name,
    );

    if (specificationExists) {
      throw new Error('Specification alredy exists');
    }

    this.specificationCategory.create({ name, description, tags });
  }
}

export { CreateSpecificationUseCase };
