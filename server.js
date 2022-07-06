const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Working');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
