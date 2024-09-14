const express = require('express');
const passport = require('passport');
require('dotenv').config(); 

const authRoutes = require('./authRoutes');
const logoutRoute = require('./logout'); 
const app = express();

app.use(express.json()); 
app.use(passport.initialize()); 

app.use('/auth', authRoutes); 
app.use('/auth', logoutRoute); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
