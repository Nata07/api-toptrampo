import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/Category';
import {
  ICategoriesRepositoryDTO,
  ICreateCategoryDTO,
} from '../ICategoriesRepositoryDTO';

class CategoriesRepository implements ICategoriesRepositoryDTO {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description, tags }: ICreateCategoryDTO): Promise<void> {
    const category = await this.repository.create({
      name,
      description,
      tags,
    });

    this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
