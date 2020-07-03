const multer = require ('multer');
const path = require('path');



//como o multer vai armazenar os arquivos 
//dirname variavel global - informa qual o diretorio do arquivo atual 
module.exports = {                
   storage: multer.diskStorage({           //separa as barras por virgulas
       destination: path.resolve(__dirname, '..','..','uploads'),//pasta que o arquivo sera salvo
       filename:(req, file, cb)=>{
           const ext = path.extname(file.originalname);
           const name = path.basename(file.originalname, ext);
           cb(null , `${name}-${Date.now()}${ext}`); //retorna o segundo
       },
    }),
     
};