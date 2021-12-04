import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { inject, injectable } from 'tsyringe';
interface IRequest {
  name: string;
  description: string;
  tags: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: CategoriesRepository,
  ) {}

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
