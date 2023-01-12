const express = require("express");

// por padrão esse require vai carregar o index
const routes = require("./routes")

const app = express();
app.use(express.json());

app.use(routes)

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));