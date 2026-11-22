const { exec } = require("child_process")
const express = require("express")
const app = express()

// vendor
app.get("/run", (req, res) => {
  const id = req.query.id
  exec(`./vendor ${id}`, (err, stdout) => {
    if (err) return res.status(500).send(err.message)
    res.type("text/plain").send(stdout)
  })
})

app.listen(9292)
