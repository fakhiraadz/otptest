const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const userRoute = require('./routes/Otp');
app.use('/otp', userRoute);

app.listen(4040, (req, res) => {
    console.log('Listening to port 4040')

});