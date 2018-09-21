var express = require('express');

var app = express();

var nan = 'Sorry, please enter two integers.';


app.get('/', (req, res) => {
	var msg = 'Welcome to the Basic Calculator! There are four endpoints'
	+ ' available to use: add, subtract, multiply, divide.' 
	+ ' To use one, simply navigate to http://127.0.0.1:8081/method/number1/number2.'
	+' For example: http://127.0.0.1:8081/add/3/4';
	console.log(msg);
	res.send(msg)
})

app.get('/add/:number1/:number2', (req, res) => {
	var num1 = parseFloat(req.params.number1);
	var num2 = parseFloat(req.params.number2);
	// Verify integer values
	if (!isNaN(num1) && !isNaN(num2)) {
		var sum = num1 + num2;
		var result = `${num1} + ${num2} = ${sum}`
		// Output result to the terminal and browser
		console.log(result);
		res.send(result)

	} else {
		console.log(nan);
		res.send(nan);
	}
})

app.get('/subtract/:number1/:number2', (req, res) => {
	var num1 = parseFloat(req.params.number1);
	var num2 = parseFloat(req.params.number2);
	// Verify integer values
	if (!isNaN(num1) && !isNaN(num2)) {
		var dif = num1 - num2;
		var result = `${num1} - ${num2} = ${dif}`
		// Output result to the terminal and browser
		console.log(result);
		res.send(result)

	} else {
		console.log(nan);
		res.send(nan);
	}
})

app.get('/multiply/:number1/:number2', (req, res) => {
	var num1 = parseFloat(req.params.number1);
	var num2 = parseFloat(req.params.number2);
	// Verify integer values
	if (!isNaN(num1) && !isNaN(num2)) {
		var product = num1 * num2;
		var result = `${num1} * ${num2} = ${product}`
		// Output result to the terminal and browser
		console.log(result);
		res.send(result)

	} else {
		console.log(nan);
		res.send(nan);
	}
})

app.get('/divide/:number1/:number2', (req, res) => {
	var num1 = parseFloat(req.params.number1);
	var num2 = parseFloat(req.params.number2);
	// Verify integer values
	if (!isNaN(num1) && !isNaN(num2)) {
		var quotient = num1 / num2;
		var result = `${num1} / ${num2} = ${quotient}`
		// Output result to the terminal and browser
		console.log(result);
		res.send(result)

	} else {
		console.log(nan);
		res.send(nan);
	}
})
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})