const express = require("express"); //chamando o express
const cors = require("cors"); //chamando o cors
const crypto = require("crypto");   //importando o crypto pra gerar UUID
const app = express(); //varriavel de controle do exprress
const port = 3220; //variavel de controle definindo a porta

app.use (cors()); //ativa o cors para fazer requisicao de qualquer origem
const imoveis = [
  {
    id: crypto.randomUUID(),
    type: "Terreno",
    price: 5000,
    address: "jardim das palmeiras, Catanduva SP",
     description: "fodase"
  },
  {
      id: crypto.randomUUID(),
      type: "Casa",
      price: 20000,
      address: "Bairro pinheiro, Catanduva SP",
       description: "fodase"
  },
  {
      id: crypto.randomUUID(),
      type: "Apartamento",
      price: 40000,
      address: "Imperial, Catanduva SP",
       description: "fodase"
  },
  {
      id: crypto.randomUUID(),
      type: "Terreno",
      price: 100000,
      address: "Seila fodase, Catigua SP",
      description: "fodase"
  },
];
  //rota para buscar todos os imoveis
app.get("/imoveis", (req, res) => {
 res.json(imoveis);
});
  
//rota que busca um imovel pelo ID
app.get("/imoveis/:id", (req, res) => {
  const {id} = req.params;
  console.log ("ID recebido", id)
  const imovel = imoveis.find((imovel) => imovel.id === id);

  if(imovel){
    res.json(imovel);

  }else {
    res.status(404).json({ message: "Imovel nao foi encontrado"});
  }
});
app.listen(port, () => {
  console.log(`App listening on port ${port}`); //function pra rodarr na pota 3220
});
