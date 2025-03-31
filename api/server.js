const express = require("express"); //chamando o express
const cors = require("cors"); //chamando o cors
const imoveisService = require("../service/imoveis"); //chamando os imoveis

const app = express(); //varriavel de controle do exprress
const port = 3220; //variavel de controle definindo a porta

app.use(cors()); //ativa o cors para fazer requisicao de qualquer origem

//rota para buscar todos os imoveis
app.get("/imoveis", (req, res) => {
  const { type, minPrice, maxPrice, city, bedroom, bathroom } = req.query;
  let imoveis = imoveisService.list();

  //fazendo o filtro do imovel
  if (type) {
    imoveis = imoveis.filter(
      (imovel) => imovel.type.toLowerCase() === type.toLowerCase());
  }

  //filtro por preco minimo
  if (minPrice) {
    imoveis = imoveis.filter((imovel) => imovel.price >= Number(minPrice));
  }

  //filtro por preco maximo
  if (maxPrice) {
    imoveis = imoveis.filter((imovel) => imovel.price <= Number(maxPrice));
    console.log("parametros recebidos", req.query);
  }

  //filtrando por cidade
  if (city) {
    imoveis = imoveis.filter(
      (imovel) => imovel.city.toLowerCase() === city.toLowerCase()
    );
  }

  //filtro por quantidade de quartos
  if (bedroom) {
    imoveis = imoveis.filter((imovel) => {
      const feature = imovel.features.find((f) => f.type === "BEDROOM");
      return feature && feature.quantity === Number(bedroom);
    });
  }

  //filtro por quantidade de banheiros
  if (bathroom) {
    imoveis = imoveis.filter((imovel) => {
      const feature = imovel.features.find((f) => f.type === "BATHROOM");
      return feature && feature.quantity === Number(bathroom);

    });
  }
   //console para debug
   console.log("imoveis apos  filtro", imoveis)

  if (imoveis.length === 0){
    return res.status(404).json({message: "Nenhum imovel encontrado"});
  }
  res.json(imoveis);
});

//rota que busca um imovel pelo ID
app.get("/imoveis/:id", (req, res) => {
  const { id } = req.params;

  const imovel = imoveisService.getById({ id });
  if (!imovel) {
    return res.status(404).json({ message: "Imovel nao foi encontrado" });
  }

  return res.json(imovel);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`); //function pra rodar na porta 3220
});

