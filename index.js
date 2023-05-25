const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const configDB = require("./configDB/configMongo");

require("dotenv").config();

const server = express();
configDB();

server.engine(".hbs", engine({ extname: ".hbs" }));
server.set("view engine", ".hbs");

server.use(express.json()); // kelayotgan malumotlarni json kurinishda qabul qilib json kurinishda uzatib turadi
server.use(express.urlencoded({ extended: false })); // tepa qatorni nastroykasi

server.use(express.static(path.join(__dirname, "public"))); // public papkadagi stylelar yoki imagelarga so`rov kelib qolsa shunchaki nomini kiritsak avtamoatik tuliq manzilini taminlab berib turadi

server.use('/uz', require('./routes/router')); // "/"" dan keyin qanaqangi so`rov kelsa routerdagi(berilgan manzildagi mudule.exports qilingan funksiyani) route funsiyani ishga tushirib yuboradi. Agar "/" ni o`rniga "/home" deb yozsak ushandan keyin kelgan so`rov uchun funksiyani ishga tushiradi
server.use('/en', require('./routes/routerEN'));
const PORT = process.env.PORT || 5000;
server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`server run : ${PORT}`);
});
