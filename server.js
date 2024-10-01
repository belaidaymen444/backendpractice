import express from "express";
import { writeFile } from "fs/promises";
import fs from "fs"
const app = express()
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/",  (rsq,res)=>{
    
    res.status(200).send("Hello")
})

app.post("/info", async (req,res)=>{
    const userData = req.body;
    const ipAddress = req.ip;
    const nom_prenom = req.body.nom_prenom;
    await fs.promises.appendFile('users.csv', JSON.stringify(userData, null,2) )
    res.status(200).render("info.ejs", { userData, nom_prenom, ipAddress });
    
})


app.use(express.static("public"))


app.listen(4000, () => {
    console.log(`Example app listening on port`)
  })
 