const fs = require('fs')
const path = require('path')

module.exports = function getOutcome(dirName) {
  const outcome = require(path.resolve(dirName, './outcome.json'))
  outcome.slug = dirName.split(path.sep).pop();

  return { outcome }
}
