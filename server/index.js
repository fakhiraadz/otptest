const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')

var corsOptions = {
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')))

const userRoute = require('./routes/Otp');
app.use('/otp', userRoute);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
