var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8944;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  //从这里开始看，上面不要看
 




	




  console.log(path)
  if(path === '/'){
	  var htmlString = fs.readFileSync('./a.html','utf-8')
	  response.setHeader('Content-Type','text/html;charset=utf-8')
	response.end(htmlString)
  }else if(path === '/style.css'){
	  var cssString = fs.readFileSync('./b.css','utf-8')
	  response.setHeader('Content-Type','text/css;charset=utf-8')
	  response.end(cssString)
  }else if(path === '/main.js'){
	  var jsString = fs.readFileSync('./c.js','utf-8') 
	  response.setHeader('Content-Type','application/javascript;charset=utf-8')
	  response.end(jsString)
  }else{	   
response.statusCode = 404
response.end('no response')
}
	

// 代码结束，下面不要看
})
server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)	
