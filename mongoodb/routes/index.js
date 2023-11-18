var express = require('express');
var router = express.Router();
const userModel = require('./users');
const { route } = require('../app');
/* GET home page. */
router.get("/", function(req, res){
     res.render("index");
   });

// create the object
router.get('/create', async function(req, res) {
let userdata = await userModel.create({
  username: "harshita",
  password: "byeyou",
  description: "you don't known",
  categories: ['js', 'react', 'nodejs', 'model'],
});
res.send(userdata);
})

// find the data 
// router.get('/find', async function(req, res) {
//     let user = await userModel.find({username: 'harsh'});
//     res.send(user);
//    }); This will get only give name but not in capital

// router.get('/find', async function(req, res) {
//   // var regex = new RegExp("Harsh", 'i');
//   var regex = new RegExp("^HaRsh$", 'i');
//   let user = await userModel.find({username: regex});
//   res.send(user);
// })
// This will get all the arrays whose username are same


// router.get('/find', async function(req, res) {
//   let user = await userModel.find({ categories: {$all:['js']}});
//   res.send(user);
// })
// Check through specific categories


// router.get('/date', async function(req, res) {
//   var d1 = new Date('2023-11-15');
//   var d2 = new Date('2023-11-20');

//   let user = await userModel.find({datecreated: {$gte: d1, $lte: d2}});
//   res.send(user);
// });
// Check through specific date range


// router.get('/exist', async function(req, res) {
//   let user = await userModel.find({categories: {$exists: true}});
//   res.send(user);
// });
// Check if any field is present or not


// router.get('/length', async function(req, res) {
//   let user = await userModel.find({
//     $expr: {
//       $and: [
//         { $gte: [{$strLenCP: '$username'}, 0]},
//         { $lte: [{$strLenCP: '$username'}, 6]},

//       ]
//     }
//   });
//   res.send(user);
// })
// check the length of the field from specific range starting and ending




module.exports = router;
