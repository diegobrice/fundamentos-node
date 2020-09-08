const { Readable } = require("stream");
const { read } = require("fs");
const readableStream = new Readable({
  read(size) {
    setTimeout(() => {
      if (this.currentChardCode > 122) {
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.currentChardCode++));
    }, 100);
  },
});

// readableStream.push(`${0 / 0} `.repeat(10).concat("Batman, Batman!"));
// readableStream.push(null);

readableStream.currentChardCode = 65;
readableStream.pipe(process.stdout);
