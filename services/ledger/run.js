const { exec } = require("child_process")
const express = require("express")
const app = express()
app.get("/ledger", (req, res) => {
  const q = req.query.q
  exec(`./ledger ${q}`, (e, out) => e ? res.status(500).send(e.message) : res.send(out))
})
app.listen(9595)
