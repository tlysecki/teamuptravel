const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const userSchema = new Schema({

   username: {type: String, required: true, unique: true},
   first_name: {type: String, required: true},
   last_name: {type: String, required: true},
   age: {type: Number, required: true},
   location: String, 
   perks: {type: String, required: true},  
   email: {type: String, required: true},
   password: {type: String, required: true},
   wannagos: [Schema.Types.ObjectId]

})

const UserModel = mongoose.model('User', userSchema);

module.exports = {
   schema: userSchema,
   model: UserModel
}