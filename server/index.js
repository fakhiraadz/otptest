const express = require('express');
const app = express();
const cors = require('cors');

//app.use(cors());
app.use(express.json());

const userRoute = require('./routes/Otp');
app.use('/otp', userRoute);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
