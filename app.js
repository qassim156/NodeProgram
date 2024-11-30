const names = require("./names");
const sayHi = require("./sayHi");
const os = require("./1-os_test");
const path = require("./2-path");
const fs = require("./3-filesystem");

//this is to read file from the content folder
console.log(fs.readFileSync("./content/subfolder/text.txt", "utf8"));

//create a new file 
fs.writeFileSync(
    "./content/subfolder/created.txt", 
    "qm",
    {flag: "a"},
);

console.log(fs.readFileSync(
    "./content/subfolder/created.txt",
    "utf8",
));

console.log(path.sep);
//console.log(os);
//sayHi(names.john);
