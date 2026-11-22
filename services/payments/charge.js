const { exec } = require("child_process")
const express = require("express")
const app = express()

// Generates a report for a customer-supplied report name.
app.get("/report", (req, res) => {
  const name = req.query.name
  exec(`./render-report ${name}`, (err, stdout) => {
    if (err) return res.status(500).send(err.message)
    res.type("text/plain").send(stdout)
  })
})

app.listen(8080)
