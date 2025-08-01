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
const courseRoutes = require("./routes/courseRoute");
const userRoutes = require("./routes/userRoute");
const tierRoutes = require("./routes/tierRoute");

// uso de rutas
app.use("/classes", classRoutes);
app.use("/teachers", teacherRoutes);
app.use("/courses", courseRoutes);
app.use("/users", userRoutes);
app.use("/tiers", tierRoutes);

// error manual de prueba
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
