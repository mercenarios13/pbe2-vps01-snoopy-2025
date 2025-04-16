class clienteController {
    static async criarCliente(req, res) {
      try {
        // lógica para criar cliente
        res.status(201).json({ message: 'Cliente criado com sucesso' });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente' });
      }
    }
  }
  
  export default clienteController;