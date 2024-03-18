const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Abhishek Saini (2110992269)"));
app.post("/bfhl",(req,res)=>{
    const data = req.body.data;
  let user = {
    "is-success": true,
    "user_id": "john_doe_17091999", 
    "email" : "john@xyz.com",
"roll_number":"ABCD123",
"odd_numbers": [],
"even_numbers": [],
"alphabets": []
};

data.forEach(element => {
  if (!isNaN(element)) {
    // Check if the element is a number (using isNaN)
     // Convert to number and push
    element = Number(element);
    console.log(element);
    
    (element%2==0)? user.even_numbers.push(element):user.odd_numbers.push(element);

}
  else{
      user.alphabets.push(element.toUpperCase());
  }
});

console.log(data);
res.json(user);

});

app.listen(4000, () => console.log("Server ready on port 3000."));

module.exports = app;