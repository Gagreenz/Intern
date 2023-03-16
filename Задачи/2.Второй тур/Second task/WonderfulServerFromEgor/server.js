const express = require('express');
const app = express();

const filmRoutes = require('./Moduls/filmRouter');
const genreRoutes = require('./Moduls/genreRouter');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/films', filmRoutes);
app.use('/genre', genreRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});