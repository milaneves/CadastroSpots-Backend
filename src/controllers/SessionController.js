// metodos de uma sessão: index, show,store, update, destroy

//importando o model de usuario
const User = require('../models/User');


//store - Cria uma sessão
module.exports = {
  async store(req, res) {
    
    const { email }  = req.body; 
                         // find: busca o usuario por id
    let user = await User.findOne({email});
     //Se não encontrar o usuario ele cria
     if (!user){
        user = await User.create({ email })
     }
       
      console.log(user)  

      return res.json(user);
  }
 
    
};
