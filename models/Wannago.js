const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      conversationSchema = require('./Conversation').schema;

const wannagoSchema = new Schema ({

   location: {type: String, required: true},
   style: {type: String, required: true},
   budget: {type: String, required: true},
   date_start: {type: Date, required: true},
   date_end: {type: Date, required: true},
   why: String,
   conversations: Schema.Types.ObjectId

});

const WannagoModel = mongoose.model('Wannago', wannagoSchema);

module.exports = {
   schema: wannagoSchema,
   model: WannagoModel
}