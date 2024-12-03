const fsSync = require("fs");

//this is to read file from the content folder
//This variable extract text content
let textContent = fsSync.readFileSync(
    "./content/subfolder/text.txt", 
    "utf8"
);

//create a new file 
fsSync.writeFileSync(
    "./content/subfolder/created.txt", 
    "qm",
    {flag: "a"}
);

module.exports = textContent;