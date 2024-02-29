const express = require("express");
const errorHandler = require("./Middleware/ErrorHandler");
const connectDB = require("./Config/dbConnection");
const router = require("./Routes/userRoutes");
const dotenv = require("dotenv").config();

connectDB(); 
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./Routes/contactRoutes"));
app.use("/api/users", require("./Routes/userRoutes"));
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});