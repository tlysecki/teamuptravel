const express = require('express'),
   app = express(),
   bodyParser = require('body-parser'),
   mongoose = require('mongoose'),
   User = require('./models/User').model,
   Team = require('./models/Team').model,
   Wannago = require('./models/Wannago').model,
   Message = require('./models/Message').model,
   Conversation = require('./models/Conversation').model;

app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   next();
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/teamup');
const connection = mongoose.connection;

connection.on('open', () => {
   console.log('mongoose is connectified');
});

connection.on('error', (err) => {
   console.log(err);
});


//USER ROUTES

//  get user homepage

app.get('/home/:user', (req, res) => {
   User.findOne({ username: req.params.user })
      .then(user => {
         if (user.wannagos.length > 0) {
            var userWannagos = Promise.all(
               user.wannagos.map(wannago => {
                  return Wannago.findById(wannago)
                     .then(found => { return found })
                     .catch(err => { return err })
               })
            )
               .then(found => { res.json({ user, found }) })
               .catch(err => { console.log(err) })
         } else {
            res.json({ user, found: [] })
         }
      })
      .catch(err => { console.log(err) })
})


//  view another user

app.get('/user/:username', (req, res) => {
   User.findOne({"username":req.params.username})
      .then(user => {
         if (user.wannagos.length > 0) {
            var userWannagos = Promise.all(
               user.wannagos.map(wannago => {
                  return Wannago.findById(wannago)
                     .then(found => { return found })
                     .catch(err => { return err })
               })
            )
               .then(found => { res.json({ user, found }) })
               .catch(err => { console.log(err) })
         } else {
            res.json({ user, found: [] })
         }
      })
      .catch(err => { console.log(err) })
})



app.post('/login', (req, res) => {
   User.findOne({ username: req.body.username })
      .then(user => {
         if (user.password === req.body.password) {
            res.send(user)
         } else {
            console.log('bad password')
            res.status(401).send()
         }
      })
})

app.post('/signup', (req, res) => {
   const newUser = new User(req.body);
   console.log(req.body)
   newUser.save()
      .then(savedUser => res.json(savedUser))
      .catch(err => { res.status(500).json(err) });
})

// app.put('/home', (req, res) => {
//     const updateUser = req.body;
//     User.findOneAndUpdate(req.body.username, updateUser)
//         .then(updated => { res.json(updated) })
//         .catch(err => { res.status(500).json(err) })
// })


//TEAM ROUTES

app.post('/newteam', (req, res) => {
   const newTeam = new Team(req.body)
   //need this to create a new conversation for the team as well
})

//WANNAGOS

app.post('/newwannago', (req, res) => {
   const newWannago = new Wannago(req.body.state);
   newWannago.save()
      .then(newGo => {
         res.json(newGo)
         return User.findOne({ "username": req.body.username })
      })
      .then(user => {
         user.wannagos.push(newWannago._id);
         console.log(user, newWannago._id);
         return user.save()

      })
      .then(addedGo => { res.send(addedGo) })
      .catch(err => { res.status(500).json(err) });


});

app.get('/wannagos', (req, res) => {
   User.findOne({ "username": req.body })
      .populate('wannagos')
})



//MESSAGE ROUTES




app.listen(8080, () => {
   console.log('don\'t forget to fix this port thing later')
})