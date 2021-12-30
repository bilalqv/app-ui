const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/data', (req, res) => {
  console.log('Request Made at /data')
    res.json({message: "Hello From Node-Express Server"});
  });

app.post('/api/state/cache', (req, res) => {
  console.log("Post Request : ", req.body );
    return res.status(204).json({ message: "success" });
  });

app.listen(3004, () => {
    console.log('Listening on Port 3004')
});