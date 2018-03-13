const express = require('express');
const app = express();
const port = process.env.PORT || 3005;

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the homepage');
});

app.listen(port, () => {
    console.log(`The app is listening in port ${port}`);
}).on("error", err => console.log("erreur de connexion: ", err));