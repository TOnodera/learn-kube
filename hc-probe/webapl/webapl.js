const express = require("express");
const app = express();
let start = Date.now();

app.get("/healthz", (request, response) => {
  let msec = Date.now() - start;
  let code = 200;
  if (msec > 40000) {
    code = 500;
  }
  console.log("GET /healthz ", code);
  response.status(code).send("OK");
});

app.get("/ready", (request, response) => {
  let msec = Date.now() - start;
  let code = 500;
  if (msec > 20000) {
    code = 200;
  }
  console.log("GET /healthz ", code);
  response.status(code).send("OK");
});

app.get("/", (request, response) => {
  console.log("GET /");
  response.send("Hello from node.js");
});

app.listen(3000);
