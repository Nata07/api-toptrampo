import { Category } from '../entities/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
  tags: string;
}

interface ICategoriesRepositoryDTO {
  create({ name, description, tags }: ICreateCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}

export { ICategoriesRepositoryDTO, ICreateCategoryDTO };
