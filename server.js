const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      User = require('./models/User').model,
      Team = require('./models/Team').model,
      Wannago = require('./models/Wannago').model,
      Message = require('./models/Message').model,
      Conversation = require('./models/Conversation').model;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/teamup');
const connection = mongoose.connection;

connection.on('open', ()=> {
    console.log('mongoose is connectified');
});

connection.on('error', (err)=> {
    console.log(err);
});


//USER ROUTES

app.get('/user/:username', (req, res)=> {
   console.log('now the user homepage shows up')
})

app.post('/signup', (req,res)=> {
   const newUser = new User(req.body);
   newUser.save()
          .then(savedUser=> res.json(savedUser))
          .catch(err=> {res.status(500).json(err)});
})

app.put('/user/:username', (req,res)=> {
   const updateUser = req.body;
   User.findOneAndUpdate(req.params.username, updateUser)
       .then(updated=> {
          res.json(updated);
       })
       .catch(err=> {res.status(500).json(err)})
})


//TEAM ROUTES

app.post('/newteam', (req,res)=> {
   const newTeam = new Team(req.body)
   //need this to create a new conversation for the team as well
})



//MESSAGE ROUTES

app.listen(8080, ()=> {
   console.log('don\'t forget to fix this port thing later')
})