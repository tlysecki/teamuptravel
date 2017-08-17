const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      userSchema = require('./User').schema;

const messageSchema = new Schema({

   timestamp: Date,
   user: Schema.Types.ObjectId,
   text: {type: String, required: true}

});

const MessageModel = mongoose.model('Message', messageSchema);

module.exports = {
   schema: messageSchema,
   model: MessageModel
}