import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
  tags: string;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}

  async execute({ name, description, tags }: IRequest): Promise<void> {
    const categoryExists = await this.categoryRepository.findByName(name);

    if (categoryExists) {
      throw new Error('Category already exists');
    }

    this.categoryRepository.create({
      name,
      description,
      tags,
    });
  }
}

export { CreateCategoryUseCase };
