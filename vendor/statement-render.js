// Vendored upstream helper, pinned from vendor-drop 2.4.1.
const { exec } = require("child_process")

function renderStatement(statementId) {
  return new Promise((resolve, reject) => {
    exec(`./statement-render ${statementId}`, (err, stdout) => {
      if (err) return reject(err)
      resolve(stdout)
    })
  })
}

module.exports = { renderStatement }
