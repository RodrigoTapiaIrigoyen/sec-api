const express = require("express")

const app = express()
 


app.get("/products",(req,res) => {
    res.send('lista de productos')
})


app.put("/put",(req,res) =>{
    res.send('productos actualizados')
} )


app.post("/post",(req,res) =>{
    res.send('producto agregado')
} )


app.delete("/delete",(req,res) =>{
    res.send('producto borrado ')
} )


app.patch("/patch",(req,res) =>{
    res.send('producto actualizado')
} )





app.listen(3000)
console.log(`server on port ${3000}`)

