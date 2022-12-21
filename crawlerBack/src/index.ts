import crawlerRoutes from "./routes/crawler.routes";
import * as bodyParser from "body-parser"; 
import dotenv from 'dotenv'; 
import mongoose from "mongoose";

var express = require("express");
var cors = require('cors')

var app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));
app.use(cors())
app.use(crawlerRoutes); 

dotenv.config({ path: 'config.env' });

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/Crawled").then(() => {
  console.log('MongoDB connection success');
}).catch(e => {
  console.log(e);
});

var listener = app.listen(process.env.PORT || 4000, function () {
    console.log("Listening: " + 'http://localhost:'+listener.address().port+'/'); 
}); 

export default app;