var express = require('express');
var csv = require('csv');
var app = express();
const fs = require("fs");

const PORT = process.env.PORT || 5000;


var colleges;


fs.readFile('db/database.csv', (err, data) => {


	console.log("[cAPi] : File read !");

	csv.parse(data, function (err, data) {

		colleges = data;

		console.log("[cAPi] : CSV Loaded !");

	});

});

app.get('/', function (req, res) {

	res.send("Colleges List API");

});


app.get('/colleges/search', function (req, res) {

	var keyword = req.query.searchTerm.toLowerCase();
	var collegesList = [];

	for (var i = 0; i < colleges.length; i++) {

		if ((colleges[i][3].toLowerCase().indexOf(keyword) >= 0) || (colleges[i][1].toLowerCase() == keyword.toLowerCase())) {
			const data = {
				sno: colleges[i][0],
				collegeCode: colleges[i][1],
				university: colleges[i][2],
				name: colleges[i][3],
				type: colleges[i][4],
				state: colleges[i][5],
				district: colleges[i][6].replace(/\?/,"-"),
				website: colleges[i][7]
			};

			const jsonString = JSON.stringify(data);
			console.log(jsonString);
			collegesList.push(data);
		}
	}

	var result = { collegesList };
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.send(JSON.stringify(collegesList));

})

app.listen(PORT, function () {

	console.log("Example app listening at " + PORT);

})