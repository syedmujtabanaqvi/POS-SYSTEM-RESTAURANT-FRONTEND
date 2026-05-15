// <!-- <script src="config.js"></script>
// <script src="a.js"></script>

// <!-- <script>
//    fetch(`${API_URL}/item`)
//   .then(res => res.json())
//   .then(data => {
//     let itemName = data.ItemName;
//     let price = data.Price;
    
//     document.getElementById("itemname").innerText = itemName;
    
//     document.getElementById("Price").innerText = "$" + price; 
//   })
//   .catch(err => {
//     console.log("ERROR:", err);
//     document.getElementById("itemname").innerText = "Error";
//     document.getElementById("Price").innerText = "Error";
//   });


// </script> --> -->

// fetch("http://localhost:5000/post", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Ali",
//     age: 20
//   })
// })
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));


fetch("http://localhost:5000/post",{


method:"POST",
headers:{
    "content-type":"application/json"
},
body:JSON.stringify({
 ItemCode: 107,
    ItemName: "coffee",
    Price: 300

})


})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));

  