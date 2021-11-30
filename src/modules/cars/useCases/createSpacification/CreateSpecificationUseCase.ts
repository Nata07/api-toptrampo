import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';

interface IRequest {
  name: string;
  description: string;
  tags: string[];
  created_at: Date;
}

class CreateSpecificationUseCase {
  constructor(private specificationCategory: SpecificationRepository) {}

  execute({ name, description, tags, created_at }: IRequest) {
    const specificationExists = this.specificationCategory.findByName(name);

    if (specificationExists) {
      throw new Error('Specification alredy exists');
    }

    this.specificationCategory.create({ name, description, tags, created_at });
  }
}

export { CreateSpecificationUseCase };
