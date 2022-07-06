const express = require('express');
require('./config/db');
const ApiRoutes = require('./routes/api');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use('/api', ApiRoutes);

app.get('/', (req, res) => {
  res.send('Working');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
