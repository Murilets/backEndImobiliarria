const express = require("express"); //chamando o express
const cors = require("cors"); //chamando o cors
const imoveisService = require("../service/imoveis"); //chamando o cors

const app = express(); //varriavel de controle do exprress
const port = 3220; //variavel de controle definindo a porta

app.use(cors()); //ativa o cors para fazer requisicao de qualquer origem

//rota para buscar todos os imoveis
app.get("/imoveis", (req, res) => {
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
  console.log(`App listening on port ${port}`); //function pra rodarr na pota 3220
});
