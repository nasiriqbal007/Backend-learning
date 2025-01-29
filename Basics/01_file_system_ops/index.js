const fs = require("fs");

// Remove folder and its contents
fs.rm("Basics/01_file_system_ops/folder", { recursive: true }, (e) => {
    if (e) {
        console.log(e);
    }
    else console.log("success")
})

// Create new folder
fs.mkdir("Basics/01_file_system_ops/newfolder", (e) => {
    if (e) {
        console.log(e);
    }
    else console.log("success")
})

// Check if file exists
fs.access("Basics/01_file_system_ops/js.txt", (e) => {
    if (e) {
        console.log("File does not exist", e);
    }
    else console.log("File exists")
})

// Read file content
fs.readFile("Basics/01_file_system_ops/js.txt", 'utf8', (e, data) => {
    if (e) {
        console.log("Error reading file", e);
        return;
    }
    else {
        console.log("File content:", data);
    }
});

// Rename file
fs.rename("Basics/01_file_system_ops/firstname.txt", "Basics/01_file_system_ops/changedname.txt", (e) => {
    if (e) {
        console.log(e)
    }
    else console.log("success");
});

// Delete file
fs.unlink("Basics/01_file_system_ops/copy.text", (e) => {
    if (e) {
        console.log(e)
    }
    else console.log("success");
});

// Copy file
fs.copyFile("Basics/01_file_system_ops/js.txt", "Basics/01_file_system_ops/copy.txt", (e) => {
    if (e) {
        console.log(e)
    }
    else console.log("success");
});

// Write to file
fs.writeFile("Basics/01_file_system_ops/js.txt", "this is first node.js code file", (e) => {
    if (e) {
        console.log(e)
    }
    else console.log("success");
});

// Append to file
fs.appendFile("Basics/01_file_system_ops/js.txt", "<----> append file", (e) => {
    if (e) {
        console.log(e)
    }
    else console.log("success");
});

// Delete file
fs.unlink("Basics/01_file_system_ops/new.txt", (e) => {
    if (e) {
        console.log(e)
    }
    else console.log("success");
})
