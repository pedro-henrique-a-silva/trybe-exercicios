const { Address, Employee } = require('../models');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
}

// const getById = async (id) => {
//   const employee = await Employee.findOne({
//       where: { id },
//       include: [{ // pode ser apenas um obj ou um array de obj
//         model: Address, as: 'addresses', attributes: { exclude: ['number'] },
//       }],
//     });
//   return employee;
// }

module.exports = { getAll, getById };