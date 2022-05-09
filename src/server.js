const express = require('express');
const app = express();
// any time app is call run express, and app has acces to express internal methods.
// need in all backend app. This entire syntax.
// declare


app.use('/static', express.static('public'))
// add

app.listen(5001, () => {
	console.log('Listening on port 5001')
})
// listen