var express = require('express');

var app = express();



app.get('/', (req, res) => {
	var msg = 'Welcome to the Basic Calculator! There are four endpoints'
	+ ' available to use: add, subtract, multiply, divide.' 
	+ ' To use one, simply navigate to http://127.0.0.1:8081/method/number1/number2'
	+' For example: http://127.0.0.1:8081/add/3/4';
	console.log(msg);
	res.send(msg)
})

app.get('/add/:number1/:number2', (req, res) => {
	var num1 = parseFloat(req.params.number1);
	var num2 = parseFloat(req.params.number2);
	var sum = num1 + num2;
	var result = `${num1} + ${num2} = ${sum}`

	console.log(result);
	res.send(result)
})

app.get('/subtract/:number1/:number2', (req, res) => {
	var num1 = parseFloat(req.params.number1);
	var num2 = parseFloat(req.params.number2);
	var dif = num1 - num2;
	var result = `${num1} - ${num2} = ${dif}`

	console.log(result);
	res.send(result)
})

app.get('/multiply/:number1/:number2', (req, res) => {
	var num1 = parseFloat(req.params.number1);
	var num2 = parseFloat(req.params.number2);
	var product = num1 * num2;
	var result = `${num1} * ${num2} = ${product}`

	console.log(result);
	res.send(result)
	res.end
})

app.get('/divide/:number1/:number2', (req, res) => {
	var num1 = parseFloat(req.params.number1);
	var num2 = parseFloat(req.params.number2);
	var quotient = num1 / num2;
	var result = `${num1} / ${num2} = ${quotient}`

	console.log(result);
	res.send(result)
	res.end
})
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})