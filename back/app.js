const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// import de rutas
const classRoutes = require("./routes/classRoute");
const teacherRoutes = require("./routes/teacherRoute");

// uso de rutas
app.use("/classes", classRoutes);
app.use("/teachers", teacherRoutes);

// error manual de prueba
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
