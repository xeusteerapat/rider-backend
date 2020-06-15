const express = require('express');
const db = require('./models')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

// const creditCardsRoutes = require('./routes/CreditCards')
// const passengerRoutes = require('./routes/Passenger')
// const reportRoutes = require('./routes/Report')
const userRoutes = require('./routes/User')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use("/credit-cards", creditCardsRoutes);
// app.use("/passenger", passengerRoutes);
// app.use("/report", reportRoutes);
app.use("/user", userRoutes)

db.sequelize.sync({alter: false}).then(() => {
  app.listen(8000, () => {
    console.log('Server is running on port 8000')
  });
})