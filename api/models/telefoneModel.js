export default (sequelize, DataTypes) => {
  return sequelize.define('Telefone', {
    numero: DataTypes.STRING,
    tipo: DataTypes.STRING,
  });
};
