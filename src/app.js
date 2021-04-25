const { response } = require('express');
const express = require ('express');
require("../src/db/Connection");
const router = require("./routers/router");
// const routerb = require("./routers/batchs")
const app = express()
var cors = require('cors')
app.use(cors())
const path = require("path");

const port = process.env.PORT || 4000;
// app.use('/admin/static', express.static(path.join(__dirname, 'routers/uploads/images/')))

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`)
})