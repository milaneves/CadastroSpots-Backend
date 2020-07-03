const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({

date:String,
approved:Boolean,
user:{
    type:mongoose.Schema.Types.ObjectId, //(Referencia do usuario - ID)
    ref: 'User' //(referencia do model)
},
//Relacionamento
spot:{
    type:mongoose.Schema.Types.ObjectId, //(Referencia do Spot - ID)
    ref: 'Spot' //(referencia do model)
}

});

module.exports = mongoose.model('Booking', BookingSchema);