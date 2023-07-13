const fs = require('fs')
const path = require('path')

module.exports = function getOutcome(dirName) {
  const methodDir = path.resolve(dirName, 'methods')

  const methods = fs.readdirSync(methodDir)
    .filter(file => fs.statSync(path.join(methodDir, file)).isDirectory())
    .map(subDir => {
      if (subDir.startsWith('_')) {
        return null
      }
      try {
        const fileStr = fs.readFileSync(path.join(methodDir, subDir, subDir + '.json'), 'utf8')
        const json = JSON.parse(fileStr)
        return json.method;
      } catch { /* do nothing */ }
      return null
    })
    .filter(method => method !== null)
    .sort((a, b) => a.index - b.index)

  const outcome = require(path.resolve(dirName, './outcome.json'))
  outcome.slug = dirName.split(path.sep).pop();

  return { methods, outcome }
}
