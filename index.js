import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
app.use(bodyParser.json());

app.use('/', function(req,res){
    res.send('Test message for base architecture of express.js!');
});

app.listen(port, function() {
    console.log("Server is starting! Port number is:" + port);
});
