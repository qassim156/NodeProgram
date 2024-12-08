// const names = require("./names");
// const sayHi = require("./sayHi");
// const os = require("./1-os_test");
// const path = require("./2-path");
// //importing fs sync
// const fsSync = require("./4-filesystemSync");
// //imorting fs normal
// const fs = require('./3-filesystem');

// console.log(fsSync);
// console.log(fs);

// console.log("Qassim");

// // console.log(path.sep);
// //console.log(os);
// //sayHi(names.john);


const {readFile} = require("fs");
const { reject } = require("lodash");
const { resolve } = require("path");

const getText = (path) => {
 return new Promise((resolve,reject) => {
    readFile(path, "utf-8", (err,data) => {
        if(err){
            reject(err);
            return;
        }else{
            resolve(data);   
            // console.log(data);
        }
    });
 });
}
getText('./content/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err));