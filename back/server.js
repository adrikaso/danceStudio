const app = require("./app");
const connectDatabase = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT;

connectDatabase();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
