import express from "express";

const app = express()

app.get("/",  (rsq,res)=>{
    
    res.get("/index.html") 
})
app.use(express.static("public"))


app.listen(4000, () => {
    console.log(`Example app listening on port`)
  })