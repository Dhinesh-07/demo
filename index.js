const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/calculate-fare", (req, res) => {
  const { distance, age, isStudent } = req.body;
  //res.send(distance);
  console.log("Received request with data:", { distance, age, isStudent });
  // Calculate the fare based on the distance and age/student status
  let fare = distance <= 10 ? 5 : 5 + (distance - 10) * 0.5;
  
  if (age >= 60 || isStudent) {
     fare = fare * 0.8;
  }
  
  console.log("Calculated fare:", fare);

  res.json({ fare });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
