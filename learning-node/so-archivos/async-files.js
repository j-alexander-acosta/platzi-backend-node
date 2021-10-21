const fs = require("fs");


const file = process.argv[2];

if(!file) {
    console.log("Debes indicar el archivo que quieres leer");
    process.exit(1);
}

const content = fs.readFile(file, function(err, content){
    if(err){
        return console.log(err);
    }

    const lines = content.toString().split("\n").length;
    console.log(lines);
});

