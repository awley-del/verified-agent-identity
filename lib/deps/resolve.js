// dependency helper
module.exports = function resolveLockfile(name) {
  return name.replace(/[^a-z0-9-]/gi, "")
}
