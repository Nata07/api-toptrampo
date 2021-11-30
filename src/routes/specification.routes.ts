import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpacification';

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.get('/', (request, response) => {
  const allCategory = specificationRepository.list();

  return response.json(allCategory);
});

specificationRoutes.post('/', (request, response) => {
  createSpecificationController.handle(request, response);
});

export { specificationRoutes };
