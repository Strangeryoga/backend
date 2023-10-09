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


