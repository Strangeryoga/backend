//install

when we download any .exe app and installation is done in specific location it will copy the files from web to our machine.

install -> copy files in our laptop/computer/tablet


//node js

node js is the lots of code of C++ which is taken from v8 engine which is present inside chrome browser and this code is wrap with js code. It allows us to write js code and it accepts js code. On the basis of C++  it will create a server environment. This code will only run until node(v8 engine and js wrapper) is running.
nodejs = (v8 engine) 
In this () is js wrapper
v8 engine => main code is present inside chrome browser. It provides a runtime environment for execution

//import and export in js

module.exports=variable name;
var data=require("./path");


//npm => Nahi Pata Mujhe
//npm = Collection of packages 
package = files of code
https://www.npmjs.com/

install
use
how to print results


//express js

express framework for nodejs
express use case => routing
routing => GET POST
https://www.facebook.com
route => /profile
/profile = profile
/contact = contact

Take an example of google search. when we search something on google in url it will show the data. This is happening because of GET route.

Now take an example of facebook. when we try to login using username and password the data will be secured it will be not in url. This is happening because of POST route.

When we search some website we are redirected to / route
https://www.microsoft.com => https://www.microsoft.com/

install express package

npm i express

for continuously running the server when we make change's we don't have to restart the server

npm i nodemon -g //for global
npm i nodemon //for that specfic package
npx nodemon filename.js


//middleware

It is a function which will run before running any route. That means before running any route if you want to do something we use middleware at that moment.

Only one issue we get when we use middleware the request get jam and we didn't reach to the route
for solving that issue we use next()


app.use(function(req, res, next){
    console.log("hello from middleware");
    next();
});


Because of HTTP we are able to make a server

//node vs express
node is the main thing. With the help of express code we write server code and how the server will react this also we write with the help of express.
if express is not their we can write code in node but it will be lengthy. We write code in express so that our life gets easier. Behind the scene express uses
node code only. That means if node is not their express will also not their but if node is their and express is not their then it's ok. Take an example of default 
browser on the phone. We rarely used that browser but we are able to use different browser which is suitable for us.

//what is express js
It is a package and mainly used for routing

//why express js
http is difficult to use, express makes this easier

//routing
the process of making routes is called routing
/profile
/home

//middleware

app.use(function(req, res, next){
    res.send("hello from middleware");
    next();
});


//req
the data of the user who is sending the request
req contains all the data coming from the user who is sending the request just like location, device info and other things
//res
server is sending the response to the user
res contains controls on that basis server sends the response
//next
next is just a push so that our request moves to the next thing which should be executed


//dynamic routing
That route whose some part is always same and some part always change

//route parameters
to make any route dynamic you can use : at the place where you want to make it dynamic, and to access there value use req.params

/author/books/issued/harsh
/author/books/issued/vivek

/author/books/issued/:username


//templates engines => this is style of markup which converts it into html
Ex. of TE => pug, handlebars, ejs, jade
pug & jade syntax looks like python
ejs syntax looks like html

//What is EJS?

What is the "E" for? "Embedded?" Could be. How about "Effective," "Elegant," or just "Easy"? EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript. It is exact duplicate of html.


html doesn't have superpowers to calculate the numbers
if we write 1+1 in html it will give us 1+1 only
ejs is advance version of html with superpowers which can do javascript inside html
Just like in react we have jsx here we have ejs

//setup of ejs

->ejs install
npm i ejs

->configue ejs
app.set('view engine', 'ejs);

->make folder with the name of views

->inside that make ejs files

->instead of send put render => at the time of render make sure to use the file that is ejs file which is present inside views folder and inside render function don't mention ejs


//static files
To setup images, stylesheets, frontend js

//Steps to setup static files
-> create a folder called public

-> create three folders inside it, images,stylesheets, javascripts

-> configure the express static 

-> understand the path

//error handling
https://expressjs.com/en/guide/error-handling.html

put error function inside
app.use()



