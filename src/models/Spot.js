const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({

thumbnail:String,
company:String,
price:Number,
techs:[String],
user:{
    type:mongoose.Schema.Types.ObjectId, //(Referencia do usuario - ID)
    ref: 'User' //(referencia do model)
}
}, {
   //spots sendo convertindo em JSON e inserindo os virtuals juntos
  toJSON:{
      virtuals:true,
  },

});



//criando um novo campo para ser computado pelo javascript
SpotSchema.virtual('thumbnail_url').get(function(){

    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);