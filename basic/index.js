const fs = require("fs");

// Remove folder and its contents
// fs.rm("basic/folder", {recursive :true},(e)=>{
//     if (e){
//         console.log(e);
//     }
//     else console.log("success")
// })

// Create new folder
// fs.mkdir("basic/newfolder", (e)=>{
//     if (e){
//         console.log(e);
//     }
//     else console.log("success")
// })

// Check if file exists
// fs.access("basic/js.txt",(e)=>{
//     if(e){
//         console.log("File does not exist", e);
//     }
//     else console.log("File exists")
// })

// Read file content
// fs.readFile("basic/js.txt",'utf8',(e, data)=>{
//     if (e) {
//         console.log("Error reading file",e);
//         return;
//     }
//     else{
//         console.log("File content:",data);
//     }
// });

// Rename file
// fs.rename("basic/firstname.txt","basic/changedname.txt", (e)=>{
//     if (e) {
//         console.log(e)
//     }
//     else console.log("success");
// });

// Delete file
// fs.unlink("basic/copy.text", (e)=>{
//     if (e) {
//         console.log(e)
//     }
//     else console.log("success");
// });

// Copy file
// fs.copyFile("basic/js.txt","basic/copy.txt", (e)=>{
//     if (e) {
//         console.log(e)
//     }
//     else console.log("success");
// });

// Write to file
// fs.writeFile("basic/js.txt","this is first node.js code file", (e)=>{
//     if (e) {
//         console.log(e)
//     }
//     else console.log("success");
// });

// Append to file
// fs.appendFile("basic/js.txt","<----> append file", (e)=>{
//     if (e) {
//         console.log(e)
//     }
//     else console.log("success");
// });

// Delete file
// fs.unlink("basic/new.txt", (e)=>{
//     if (e) {
//         console.log(e)
//     }
//     else console.log("success");
// })
