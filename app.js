const names = require("./names");
const sayHi = require("./sayHi");
const os = require("./1-os_test");
const path = require("./2-path");
//importing fs sync
const fsSync = require("./4-filesystemSync");
//imorting fs normal
/*this will  require

*/
const fs = require('./3-filesystem');


//this is to read file from the content folder
console.log(fsSync.readFileSync("./content/subfolder/text.txt", "utf8"));

//create a new file 
fsSync.writeFileSync("./content/subfolder/created.txt", "qm");

console.log(fsSync.readFileSync("./content/subfolder/created.txt", "utf8"));

console.log(path.sep);
//console.log(os);
//sayHi(names.john);
