import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoryRepository: CategoriesRepository,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoryUseCase };
