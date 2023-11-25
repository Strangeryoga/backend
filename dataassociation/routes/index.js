var express = require('express');
var router = express.Router();
const userModel = require('./users')
const postModel = require('./posts')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/alluserposts', async function(req, res, next) {
  let user = await userModel
  .findOne({_id: '6561e2bcd5689012731d597c'})
  .populate('posts') // converts id into real data
  res.send(user);
})

router.get('/createuser', async function ( req, res, next){
  let createduser = await userModel.create({
    username: 'cris',
    password: 'proar',
    posts: [],
    email: 'cris@male.com',
    fullname: 'Crisproar',
  });
  res.send(createduser)
}); 

router.get('/createpost', async function (req, res, next) {
 let createdpost = await postModel.create({
    postText: "nature",
    user: '6561e2bcd5689012731d597c'
  });
  let user = await userModel.findOne({_id: '6561e2bcd5689012731d597c'});
  user.posts.push(createdpost._id);
  await user.save();
  res.send(('done'));
});


module.exports = router;
