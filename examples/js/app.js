
// www.bugsnag.com
// https://github.com/bugsnag/bugsnag-js/tree/master/examples/js
//
// this example app demonstrates some of the basic syntax to get Bugsnag error reporting configured in your Javascript code.
// ***********************************************************

document.getElementById('jsHandled').addEventListener('click', sendHandled)
document.getElementById('jsUnhandled').addEventListener('click', sendUnhandled)

// Below function will catch an error, and shows how you can add/modify information to the report right before sending.
// Note that the configuration and beforeSend defined in the earlier initialization of bugsnag (in the html) will be applied *after* the statements executed here in notify().
function sendHandled () {
  console.log('a handled error with metadata has been reported to your Bugsnag dashboard')
  try {
    // deliberate Reference Error
    console.log(doesntExist) // eslint-disable-line
  } catch (e) {
    window.bugsnagClient.notify(e, {
      context: 'a handled ReferenceError with metadata',
      // unhandled errors default to 'warning', but you can override
      severity: 'info',
      // Note that metadata can be declared globally,
      // in the noticification (as below) or in a beforeSend.
      metaData: {
        company: {
          name: "Xavier's School for Gifted Youngsters"
        }
      }
    })
  }
}

// Below function will trigger an unhandled error which will report to bugsnag, along with all the info configured in the initialization of bugsnag in the html.
function sendUnhandled () {
  console.log('an unhandled error has been reported to your Bugsnag dashboard')
  var num = 1
  // deliberate Type Error
  num.toUpperCase()
}

// below is the simplest notification syntax, akin to logging.
window.bugsnagClient.notify('End of file')
