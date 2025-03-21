const { imoveis } = require("../database/data");

const getById = ({ id }) => {
  const imovel = imoveis.find((imovel) => imovel.id === id);
  return imovel;
};

module.exports = {
  getById,
}
