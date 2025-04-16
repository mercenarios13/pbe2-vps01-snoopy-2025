import express from 'express';
import * as controller from '../controllers/pedidoController.js';

const router = express.Router();

router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;
