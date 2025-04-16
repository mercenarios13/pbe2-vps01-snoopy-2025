export default (sequelize, DataTypes) => {
  return sequelize.define('Pedido', {
    produto: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    quantidade: DataTypes.INTEGER,
    subTotal: DataTypes.FLOAT,
  });
};
