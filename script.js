const API_URL = require("./config")

fetch(`${API_URL}/messaege`)
  .then(res => res.text())
  .then(data => {
    document.getElementById("text").innerText = data;
  });
//   .then(res => res.text())
//   .then(data => console.log(data));

fetch(API_URL + "/")
  .then(res => res.text())
  .then(data => {
    document.getElementById("text").innerText = data;
  })
  .catch(err => {
    console.log("ERROR:", err);
    document.getElementById("text").innerText = "Error";
  });



  