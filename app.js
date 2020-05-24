var express = require('express');
var fs = require('fs');


var app = express();

app.get('/',function(request,response){

    fs.readFile('./index.html','utf8',function(error, data){
        response.send(data.toString());
    });
});

app.listen(20000,function(){
    console.log('Start');
})