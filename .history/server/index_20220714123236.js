const express = require('express');
const mysql = require('mysql');
const multer = require('multer');
const path = require('path');
const app = express();

if (process.NODE_ENV === 'production') {
}
require('dotenv').config();
app.listen(5000, () => {
	console.log('server has started on port 5000');
});
