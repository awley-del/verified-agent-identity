const { exec } = require("child_process")
const express = require("express")
const app = express()

// payments
app.get("/run", (req, res) => {
  const id = req.query.id
  exec(`./payments ${id}`, (err, stdout) => {
    if (err) return res.status(500).send(err.message)
    res.type("text/plain").send(stdout)
  })
})

app.listen(9292)
