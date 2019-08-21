export default (sequelize, DataTypes) => {
  return sequelize.define("Animal", {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true
    }
  });
};
