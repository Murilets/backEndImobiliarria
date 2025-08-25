const express = require("express"); //chamando o express
const cors = require("cors"); //chamando o cors
const imoveisService = require("../service/imoveis"); //chamando os imoveis
const path = require('path');
const fs = require('fs');
const app = express(); //varriavel de controle do exprress
const port = 3220; //variavel de controle definindo a porta

const imagePath = path.join(__dirname, '../public/images');
console.log('=== DEBUG DAS IMAGENS ===');
console.log('__dirname:', __dirname);
console.log('Caminho das imagens:', imagePath);
//verificacao se a pasta existe
if(fs.existsSync(imagePath)) {
  console.log('Pasta existe');
//listar oque tem na pasta
  const files = fs.readdirSync(imagePath, { recursive: true});
  console.log('arquivo encontrados:', files);
} else {
  console.log('Pasta não existe!');
}
console.log('====');

//ativa o cors para fazer requisicao de qualquer origem
app.use(cors({
  origin: [
    /localhost/, 
    /brs.devtunnels.ms/
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use ('/images', express.static(imagePath)) //usando a variavel imagePath

//rota para buscar todos os imoveis
app.get("/imoveis", (req, res) => {
  const { type, minPrice, maxPrice, city, bedroom, bathroom } = req.query;
  console.log("valor recebido no filtro de type", type);
  console.log("valor recebido no filtro de cidade", city);
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
    return res.status(200).json([]);
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

