const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Import route files
const loginRoutes = require('./routes/loginRoutes');
const usersRoutes = require('./routes/userRoutes');
const alertsRoutes = require('./routes/alertRoutes');
const manageProfileRoutes = require('./routes/manageProfileroutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const cameraRoutes = require('./routes/cameraRoutes');
// Add similar lines for other routes

// Use route files
app.use('/users', usersRoutes);
// Add similar lines for other routes
app.use('/alerts', alertsRoutes);
app.use('/camera', cameraRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/manage_profile',manageProfileRoutes);
app.use('/login',loginRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
