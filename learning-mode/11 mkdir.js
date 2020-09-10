const fs = require("fs");

fs.mkdir("hola/mundo/pruebas", { recursive: true }, (err) => {
  if (err) {
    return console.log(err);
  }
});
