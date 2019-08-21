export default (sequelize, DataTypes) => {
  return sequelize.define("Pet", {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true
    }
  });
};
