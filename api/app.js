import express from 'express';
import { 
  criarCliente, 
  obterClientes, 
  obterClientePorId, 
  atualizarCliente, 
  deletarCliente 
} from './controllers/clienteController.js';

const app = express();
app.use(express.json());

// Rota para criar cliente
app.post('/clientes', criarCliente);

// Rota para obter todos os clientes
app.get('/clientes', obterClientes);

// Rota para obter um cliente específico
app.get('/clientes/:id', obterClientePorId);

// Rota para atualizar cliente
app.put('/clientes/:id', atualizarCliente);

// Rota para deletar cliente
app.delete('/clientes/:id', deletarCliente);

export default app;
