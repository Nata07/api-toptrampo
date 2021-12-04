import { container } from 'tsyringe';
import { ICategoriesRepositoryDTO } from '../../modules/cars/repositories/ICategoriesRepositoryDTO';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
import { ISpecificationRepositoryDTO } from '../../modules/cars/repositories/ISpecificationRepositoryDTO';

container.registerSingleton<ICategoriesRepositoryDTO>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepositoryDTO>(
  'SpecificationRepository',
  SpecificationRepository,
);
