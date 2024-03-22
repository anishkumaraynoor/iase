require('dotenv').config()
const express = require('express')
const cors = require('cors')
const iaseServer = express()
iaseServer.use(cors())
iaseServer.use(express.json())
const PORT = 3000 || process.env.PORT
iaseServer.listen(PORT, ()=>{
    console.log(`Server started Port:${PORT}`);
})
