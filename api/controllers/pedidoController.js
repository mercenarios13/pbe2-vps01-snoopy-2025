import models from '../models/index.js';
const { Pedido, Cliente } = models;

export const create = async (req, res) => {
  const { clienteId, produto, preco, quantidade } = req.body;
  const subTotal = preco * quantidade;

  const pedido = await Pedido.create({ clienteId, produto, preco, quantidade, subTotal });
  res.status(201).json(pedido);
};

export const update = async (req, res) => {
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) return res.status(404).json({ error: 'Pedido não encontrado' });

  const { preco, quantidade } = req.body;
  const subTotal = preco * quantidade;

  await pedido.update({ ...req.body, subTotal });
  res.json(pedido);
};

export const remove = async (req, res) => {
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) return res.status(404).json({ error: 'Pedido não encontrado' });

  await pedido.destroy();
  res.status(204).end();
};
