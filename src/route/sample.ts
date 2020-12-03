import { SampleController } from '../controller/sample-controller';
import { Router } from 'express';

const router = Router();
const sampleController = new SampleController()

router.get('/', sampleController.fakeJsonResponse);

export { router as SampleRouter }
