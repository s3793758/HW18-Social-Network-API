const express = require('express');
require('./db');
const UserRoutes = require('./routes/user');
const ThoughtRoutes = require('./routes/thought');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use('/api', UserRoutes);

app.get('/', (req, res) => {
  res.send('Working');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
