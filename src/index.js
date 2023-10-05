const express = require('express');
require ('dotenv').config();
const configViewEngine = require("./config/viewEngine");
const  initWebRoute  = require("./routers/web");
const connection = require("./config/database");
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;
//Khai báo middleware để express xử lý dữ liệu thô và lưu và CDSL
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//configure template engine
configViewEngine(app);
//init web route
initWebRoute(app);

app.listen(port,hostname,()=>{
  console.log(`App already start listen art http://${hostname}:${port}`);
})