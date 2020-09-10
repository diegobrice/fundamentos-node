// %s
// %n
// %j

// console.log("un %s y un %s", "hola", "mundo");

// console.info("Info");
// console.warn("Warning");

// console.trace("hello");

const util = require("util");

const debuglog = util.debuglog("foo");

debuglog("hello from foo");
