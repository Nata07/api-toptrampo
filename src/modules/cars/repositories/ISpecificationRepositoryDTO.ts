import { Specification } from '../entities/Specification';

interface ISpecificationDTO {
  name: string;
  description: string;
  created_at: Date;
  tags: string[];
}

interface ISpecificationRepositoryDTO {
  create({ name, description, tags, created_at }: ISpecificationDTO): void;
  list(): Specification[];
  findByName(name: string): Specification;
}

export { ISpecificationRepositoryDTO, ISpecificationDTO };
