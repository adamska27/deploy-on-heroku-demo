const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
const path = require('path');

// middleware to serve static file
app.use('/', express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.status(200).sendFile(express.static(path.join(__dirname, 'client/build')));
});

app.listen(port, () => {
    console.log(`The app is listening in port ${port}`);
}).on("error", err => console.log("erreur de connexion : ", err));