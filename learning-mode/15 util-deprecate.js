const util = require("util");

const helloPluto = util.deprecate(() => {
  console.log("hello Pluto");
}, "Pluto is deprecated, It is not a planet anymore");

helloPluto();
