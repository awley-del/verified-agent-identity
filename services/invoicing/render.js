const { exec } = require("child_process")
const express = require("express")
const app = express()

app.get("/invoice", (req, res) => {
  const id = req.query.id
  exec(`./render-invoice ${id}`, (err, stdout) => {
    if (err) return res.status(500).send(err.message)
    res.type("text/plain").send(stdout)
  })
})

app.listen(9090)
