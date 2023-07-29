const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleWire;
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Boss is sitting.........................')
})

app.listen(port, () => {
    console.log(`Bistro Boss is sitting on port ${port}`)
})