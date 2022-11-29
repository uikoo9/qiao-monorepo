"use strict";

// qiao-cli
const cli = require("../index.js");

// test
const test = () => {
  const bar = new cli.progress(":bar", { total: 10 });
  const timer = setInterval(() => {
    bar.tick();

    if (bar.complete) {
      console.log("\ncomplete\n");
      clearInterval(timer);
    }
  }, 100);
};

// run
test();
