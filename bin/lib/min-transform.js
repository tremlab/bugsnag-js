const through = require('through2')

const classCallCheckDefinitionRe = /function (_{1,3})classCallCheck\(instance, Constructor\) { if \(!\(instance instanceof Constructor\)\) { throw new TypeError\("Cannot call a class as a function"\); \} \}/g
const classCallCheckCallRe = /_classCallCheck\(this, \w+\);/g

const esUtilsPath = `${__dirname}/../../base/lib/es-utils`
const objAssignDefRe = /Object\.assign \|\|.*\n/g

module.exports = file => {
  return through(function (buf, enc, next) {
    this.push(
      buf.toString('utf8')
        .replace(classCallCheckDefinitionRe, '/* removed (min-transform): $& */')
        .replace(classCallCheckCallRe, '/* removed (min-transform): $& */')
        .replace(objAssignDefRe, `require('${esUtilsPath}').assign`)
      )
    next()
  })
}
