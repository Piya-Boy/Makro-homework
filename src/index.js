require('dotenv').config()
const cors = require('cors')
const express = require('express')  
const notFoundHandler = require("./middlewares/notFound");
const errorHandler = require("./middlewares/error");
const createError = require("./utils/createError");

const authRouter = require('./routers/auth-router');
const productRoute = require('./routers/product-router');
const app = express()

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use("/product", productRoute);

app.use(errorHandler);
app.use("*", notFoundHandler);

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

