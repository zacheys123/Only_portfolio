const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const app = express();

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
	app.get('*', (req, res) => {
		res.resolve(path.join(__dirname, 'build', 'index.html'));
	});
}

app.listen(5000, () => {
	console.log('server has started on port 5000');
});
