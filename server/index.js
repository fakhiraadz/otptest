const express = require('express');
const app = express();
const cors = require('cors');

var corsOptions = {
    origin: 'https://otptest-1.herokuapp.com/',
    methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
app.use(express.json());

const userRoute = require('./routes/Otp');
app.use('/otp', userRoute);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
