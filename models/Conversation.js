const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      messageSchema = require('./Message').schema;

const conversationSchema = new Schema({

   users: [Schema.Types.ObjectId],
   messages: [Schema.Types.ObjectId]

});

const ConversationModel = mongoose.model('Conversation', conversationSchema);

module.exports = {
   schema: conversationSchema,
   model: ConversationModel
}