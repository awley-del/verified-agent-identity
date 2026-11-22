const express = require("express")
const { renderStatement } = require("./vendor/statement-render")

const app = express()

app.get("/statement", async (req, res) => {
  try {
    const out = await renderStatement(req.query.id)
    res.type("text/plain").send(out)
  } catch (e) {
    res.status(500).send(e.message)
  }
})

app.listen(9393)
