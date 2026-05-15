const API_URL = require("./config");
fetch(`${API_URL}/`)
  .then(res => res.text())
  .then(data => console.log(data));