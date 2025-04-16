import express from 'express';
import clienteRoutes from './routes/ClienteRoutes.js';

const app = express();
app.use(express.json()); // importante para ler JSON

app.use('/', ClienteRoutes); // <- Certifique-se que está usando as rotas

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
