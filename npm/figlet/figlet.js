var figlet=require("figlet");

figlet("Tejas", function(err, data){
    if(err){
        console.log("something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});