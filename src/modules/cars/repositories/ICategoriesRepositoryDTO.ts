import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
  created_at: Date;
  tags: string[];
}

interface ICategoriesRepositoryDTO {
  create({ name, description, tags, created_at }: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepositoryDTO, ICreateCategoryDTO };
