const Spot = require('../models/Spot');
const User = require('../models/User');


module.exports = {
async index (req, res){ //retornar uma listagem de spot
  const { tech } = req.query;
 //listar os sposta de uma determinada tecnologia 
  const spots = await Spot.find({ techs : tech})
  return res.json(spots);
},

async store (req, res) {
const { filename } = req.file;
const {company, techs, price } = req.body;
const {user_id} = req.headers;

const user = await User.findById(user_id);

if (!user){
 return res.status(400).json({ error: ' Usuário não existe'});
    
}


 const spot = await Spot.create({
    user: user_id,
    thumbnail:filename, 
    company, 
    techs: techs.split(',').map(tech => tech.trim()), //split - seprar por virgula .trim - remove o espaço em branco
    price
 })

    return res.json(spot)
 }
};
