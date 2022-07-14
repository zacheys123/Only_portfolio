const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
	app.get('*', (req, res) => {
		res.resolve(path.join(__dirname, 'build', 'index.html'));
	});
}

app.listen([port], () => {
	console.log('server has started on port 5000');
});
