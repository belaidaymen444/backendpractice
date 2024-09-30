import express from "express";
import { writeFile } from "fs/promises";
const app = express()
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/",  (rsq,res)=>{
    
    res.status(200).send("Hello")
})
app.get("/info",(req,res)=>{
    writeFile("users.csv",JSON.stringify(req.body))
    res.status(200).render("view/admin.ejs", req.body);
})
app.use(express.static("public"))


app.listen(4000, () => {
    console.log(`Example app listening on port`)
  })