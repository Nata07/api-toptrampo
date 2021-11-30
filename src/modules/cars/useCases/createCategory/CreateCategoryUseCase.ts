import { CategoriesRepository } from '../../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
  tags: string[];
  created_at: Date;
}

class CreateCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}

  execute({ name, description, tags, created_at }: IRequest) {
    const categoryExists = this.categoryRepository.findByName(name);

    if (categoryExists) {
      throw new Error('Category already exists');
    }

    this.categoryRepository.create({
      name,
      description,
      tags,
      created_at,
    });
  }
}

export { CreateCategoryUseCase };
