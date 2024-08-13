const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");

app.get("/getcookies",(req,res)=>{
    res.cookie("greet","namaste");
    res.cookie("madeIn","India");
    res.send("sent you some cookies!");
})

app.get("/",(req,res)=>{
    res.send("Hi,I am root!")  
})

app.use("/users",users);
app.use("/posts",posts);


app.listen(3000,()=>{
    console.log("App is listening  on port 3000");
});