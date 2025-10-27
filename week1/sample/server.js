const express = require("express")

const app = express()

// default get route
app.get("/", (req, res) => {res.send("Welcome home!")})

const HOST = 'localhost'
const PORT = 3000

// log statement to confirm server operation
app.listen(PORT, () => {
    console.log(`trial app listening on ${HOST}:${PORT}`)
})