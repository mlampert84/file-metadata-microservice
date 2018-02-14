const express = require('express')
const multer = require('multer')
const upload = multer()
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))

app.post('/',upload.single('theFile'),(req,res)=>{

  jsonRes = {size: req.file.size}
  res.end(JSON.stringify(jsonRes))
})


app.listen(PORT,()=>console.log("Listening on port " + PORT))

