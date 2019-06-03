var express = require("express");

const fs = require('fs');

var app = express();

const dataFileName = "data/data.json";
const boardsFileName = "data/boards.json";

//let data = JSON.parse(fs.readFile(dataFileName).toString());
//                       , function(err){
// 
//    if(err) {
//        return console.log(err);
//    }
//
//    console.log("Успешно прочитал данные из файла");
//}); 



//console.log("Data from file", data);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/boards", (req, res, next) => {
    let boardsData = JSON.parse(fs.readFileSync(boardsFileName).toString());
 res.setHeader("Access-Control-Allow-Origin", '*');
// res.json(["Tony","Lisa","Michael","Ginger","Food"]);
    res.json(boardsData);
});

//fs.writeFileSyng(dataFileName, JSON.stringify(data));
//fs.writeFileSyng(dataFileName, JSON.stringify(data), function(err) {
//    if(err) {
//        return console.log(err);
//    }
//
//    console.log("Данные сохранены!");
//}); 