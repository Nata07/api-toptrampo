import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpacification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/useCases/listSpecification/ListSpecificationController';

const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationRoutes.get('/', listSpecificationController.handle);

specificationRoutes.post('/', createSpecificationController.handle);

export { specificationRoutes };
