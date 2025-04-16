import express from 'express';
import clienteController from '../controllers/clienteController.js';

const router = express.Router();

router.post('/clientes', clienteController.criarCliente); // <- ESSA LINHA É ESSENCIAL

export default router;
