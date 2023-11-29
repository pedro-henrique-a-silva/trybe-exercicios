// src/models/employee.model.js

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'employees', // Informa de forma explicita on nome da tabela
    underscored: true, // Diz ao sequelize para camelizar os nomes de colunas
  });

  Employee.associate = (models) => { // Informa o relacionamento desse model com Address
    Employee.hasOne(models.Address, // Informa 1 relacionamento
      { foreignKey: 'employeeId', as: 'addresses' });
  };

  return Employee;
};