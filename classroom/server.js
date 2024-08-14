const express = require("express");
const app = express();
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/getsignedcookies",(req,res)=>{
    res.cookie("madeIn","India",{signed:true});
    res.send("signed cookie sent")
});

app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verified");
})

app.get("/getcookies",(req,res)=>{
    res.cookie("greet","namaste");
    res.send("sent you some cookies!");
})

app.get("/greet",(req,res)=>{
    let{name = "anonymous"} = req.cookies;
    res.send(`Hi,${name}`);   
})

app.get("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("Hi,I am root!")  
})

app.use("/users",users);
app.use("/posts",posts);


app.listen(3000,()=>{
    console.log("App is listening  on port 3000");
});