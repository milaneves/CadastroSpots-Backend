//Iniciando o servidor 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path =  require('path');
const routes =  require('./routes');

const app = express();
mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-mlu8d.mongodb.net:27017,omnistack-shard-00-01-mlu8d.mongodb.net:27017,omnistack-shard-00-02-mlu8d.mongodb.net:27017/Semana09?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority',{
useNewUrlParser:true,
useUnifiedTopology:true, 

});

app.use(cors());
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads' )));
app.use(routes);
app.listen(3333);















//get - buscar uma informação do backend --listagem dos usuarios
//post - criar  - cadastro do usuário
//Put - Alterar

//req.query = Acessr query params
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para criação , edição)

//retorna uma mensagem como resposta para o navegador
//req - Informações que o usuário envia
//res - devolve uma resposta para o cliente(navegador) 






