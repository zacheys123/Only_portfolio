const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const app = express();
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'VIDEO_APP',
});

multer.diskStorage({
	destination: './videos',
	filename: (req, file, cb) => {
		return cb(
			null,
			`${file.filename}_${Date.now()}${
				path.extname
			}(file.originalname)`,
		);
	},
});

connection.connect(function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('connected');
		var sqlinsert = 'INSERT INTO Videos(title,url) VALUES ?';
		var values = [
			{
				title: 'Vocal Classes 101',
				url: classes101.file.filename,
			},
			{
				title: 'last minute improv 101',
				url: Improvleaning101.file.filename,
			},
			{
				title: 'Some food for the soul',
				url: LetGoLetGod.file.filename,
			},
			{
				title: 'More improv (-_-)',
				url: Leaningimprov.file.filename,
			},
			{
				title: 'XF8 jam session on Leaning',
				url: XF8jamsessiononLeaning.file.filename,
			},
		];
		connection.query(sqlinsert[values], (err, result) => {
			if (err) {
				console.log(err);
			} else {
				console.log(
					`the no of inserted rows  was ${result.affectedRows}`,
				);
			}
		});
	}
});

app.listen(5000, () => {
	console.log('server has started on port 5000');
});
