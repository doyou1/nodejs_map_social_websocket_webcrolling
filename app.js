var express = require('express');
var fs = require('fs');
var request = require('request');
var app = express();

app.get('/',function(request,response){

    fs.readFile('./index.html','utf8',function(error, data){
        response.send(data.toString());
    });
});

//상가정보 오픈api 활용
var url = 'http://apis.data.go.kr/B553077/api/open/sdsc/baroApi';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=U0py6BRyBOfLkb47JFPwumzNcXMFUgNxj%2BROWjneChqN6TsY3itcQHuCJgT4IT0iyHgfD%2FQI9fwyPfE9fzwZnQ%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('resId') + '=' + encodeURIComponent('store'); /* */
queryParams += '&' + encodeURIComponent('catId') + '=' + encodeURIComponent('radius'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});

app.listen(20000,function(){
    console.log('Start');
})