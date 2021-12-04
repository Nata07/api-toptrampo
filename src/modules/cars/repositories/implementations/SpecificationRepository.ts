import { getRepository, Repository } from 'typeorm';
import { Specification } from '../../entities/Specification';
import {
  ISpecificationDTO,
  ISpecificationRepositoryDTO,
} from '../ISpecificationRepositoryDTO';

class SpecificationRepository implements ISpecificationRepositoryDTO {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description, tags }: ISpecificationDTO): Promise<void> {
    const specification = await this.repository.create({
      name,
      description,
      tags,
    });

    this.repository.save(specification);
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();

    return specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({
      name,
    });

    return specification;
  }
}

export { SpecificationRepository };
