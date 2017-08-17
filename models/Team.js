const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      conversationSchema = require('./Conversation').schema;

const teamSchema = new Schema({

   team_name: {type: String, required: true, unique: true},
   style: String,
   date_start: {type: String, required: true},
   date_end: {type: String, required: true},
   users: [Schema.Types.ObjectId],
   conversations: [conversationSchema]

});

const TeamModel = mongoose.model('Team', teamSchema);

module.exports = {
   schema: teamSchema,
   model: TeamModel
}