const fs = require("fs");
const file = fs.createWriteStream("./big");

for (let i = 0; i <= 1e6; i++) {
  file.write("Esto tiene que ser una frase mas larga ");
}

file.end();
