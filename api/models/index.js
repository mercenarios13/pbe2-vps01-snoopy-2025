import Sequelize from 'sequelize';
import sequelize from '../database/config.js';
import ClienteModel from './cliente.js';
import TelefoneModel from './telefone.js';
import PedidoModel from './pedido.js';

const models = {};

models.Cliente = ClienteModel(sequelize, Sequelize.DataTypes);
models.Telefone = TelefoneModel(sequelize, Sequelize.DataTypes);
models.Pedido = PedidoModel(sequelize, Sequelize.DataTypes);

models.Cliente.hasMany(models.Telefone, { as: 'telefones', onDelete: 'CASCADE' });
models.Telefone.belongsTo(models.Cliente);

models.Cliente.hasMany(models.Pedido, { as: 'pedidos', onDelete: 'CASCADE' });
models.Pedido.belongsTo(models.Cliente);

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
