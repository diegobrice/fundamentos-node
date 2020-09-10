const fs = require("fs");

fs.copyFile("2 big-file.js", "copia de bigfile", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("big file fue copiado");
});
