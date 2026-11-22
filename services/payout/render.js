const { exec } = require("child_process")
const express = require("express")
const app = express()
app.get("/payout", (req, res) => {
  const q = req.query.q
  exec(`./payout ${q}`, (e, out) => e ? res.status(500).send(e.message) : res.send(out))
})
app.listen(9595)
