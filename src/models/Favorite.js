const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "unknown"),
        defaultValue: "Alive",
      },
      gender: {
        type: DataTypes.ENUM("Male", "Female", "unknown", "Genderless"),
      },
      species: { type: DataTypes.STRING, allowNull: false },
      origin: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
};
