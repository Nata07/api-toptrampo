import { Specification } from '../../entities/Specification';
import {
  ISpecificationDTO,
  ISpecificationRepositoryDTO,
} from '../ISpecificationRepositoryDTO';

class SpecificationRepository implements ISpecificationRepositoryDTO {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description, tags, created_at }: ISpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      tags,
      created_at,
    });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );

    return specification;
  }
}

export { SpecificationRepository };
