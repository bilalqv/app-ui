const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/data', (req, res) => {
  console.log('Request Made at /data')
    res.json({message: "Hello From Node-Express Server"});
  });


app.listen(3004, () => {
    console.log('Listening on Port 3004')
});