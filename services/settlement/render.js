const { exec } = require("child_process")
const express = require("express")
const app = express()

// Renders a settlement invoice for the given settlement id.
app.get("/settlement", (req, res) => {
  const id = req.query.id
  exec(`./render-settlement ${id}`, (err, stdout) => {
    if (err) return res.status(500).send(err.message)
    res.type("text/plain").send(stdout)
  })
})

app.listen(9191)
