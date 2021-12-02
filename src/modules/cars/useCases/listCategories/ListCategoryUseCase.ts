import { Category } from '../../entities/Category';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

class ListCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}

  async execute(): Promise<Category[]> {
    return await this.categoryRepository.list();
  }
}

export { ListCategoryUseCase };
