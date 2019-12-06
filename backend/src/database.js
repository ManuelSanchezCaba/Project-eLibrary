const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
	host: 'bri4bqfrjjs8xdl7fkbg-mysql.services.clever-cloud.com',
	user: 'uwjrebzvbiulvlqk',
	password: 'S4MGfUZhvSN5rNMl8f9I',
	database: 'bri4bqfrjjs8xdl7fkbg',
});

mysqlConnection.connect(function(err) {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log('DB is connected');
	}
});

module.exports = mysqlConnection;
