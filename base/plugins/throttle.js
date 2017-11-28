const positiveIntIfDefined = require('../lib/positive-int-check')

/*
 * Throttles and dedupes error reports
 */

module.exports = {
  init: (client) => {
    // track sent events for each init of the plugin
    let n = 0

    // add beforeSend hook
    client.config.beforeSend.push((report) => {
      // have max events been sent already?
      if (n >= client.config.maxEvents) return report.ignore()
      n++
    })

    client.refresh = () => { n = 0 }
  },
  configSchema: {
    maxEvents: {
      defaultValue: () => 10,
      message: '(number) maxEventsPerWindow must be a number if specified',
      validate: val => positiveIntIfDefined(val) && val < 100
    }
  }
}
