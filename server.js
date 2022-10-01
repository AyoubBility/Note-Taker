const express = require('express');

const app = express();
const PORT = 3001;
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(express.json());
require("./routes/api_route")(app);
require("./routes/html_route")(app);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);