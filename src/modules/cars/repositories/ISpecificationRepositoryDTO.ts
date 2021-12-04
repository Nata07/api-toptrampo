import { Specification } from '../entities/Specification';

interface ISpecificationDTO {
  name: string;
  description: string;
  tags: string;
}

interface ISpecificationRepositoryDTO {
  create({ name, description, tags }: ISpecificationDTO): Promise<void>;
  list(): Promise<Specification[]>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepositoryDTO, ISpecificationDTO };
