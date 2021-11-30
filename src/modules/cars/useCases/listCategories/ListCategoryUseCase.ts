import { Category } from '../../model/Category';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';

class ListCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}

  execute(): Category[] {
    return this.categoryRepository.list();
  }
}

export { ListCategoryUseCase };
