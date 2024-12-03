const fs = require("fs");
const textContent = require("./4-filesystemSync");

fs.writeFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});

let fstextContent = fs.readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});



module.exports = fstextContent;
