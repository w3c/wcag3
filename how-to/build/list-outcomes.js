const fs = require('fs')
const path = require('path')

module.exports = function listOutcomes(dirName = './outcomes') {
  const outcomes = fs.readdirSync(dirName)
    .filter(file => fs.statSync(path.join(dirName, file)).isDirectory())
    .map(subDir => {
      if (subDir.startsWith('_')) {
        return null;
      }
      try {
        const fileStr = fs.readFileSync(path.join(dirName, subDir, 'outcome.json'), 'utf8')
        const json = JSON.parse(fileStr)
        json.slug = subDir
        return json
      } catch (e) {
        console.error(e)
      }
      return null
    })
    .filter(method => method !== null)
    .sort((a, b) => a.index - b.index)

  return { outcomes }
}
