const { imoveis } = require("../database/data");

const list = () => {
  return imoveis;
};

const getById = ({ id }) => {
  const imovel = imoveis.find((imovel) => imovel.id === id);
  return imovel;
};

module.exports = {
  list,
  getById,
};
