// This file sends a notificatin to Bugsnag within a layered stacktrace.
// When the WRONG source map is uploaded for this file (will use randomap.min.js.map) you will see at app.bugsnag.com, what that looks like.

// curl https://upload.bugsnag.com/ \
//     -F apiKey=API key \
//     -F appVersion=1.2.3 \
//     -F minifiedUrl=http://localhost:5000/wrongmap.min.js \
//     -F sourceMap=@randomap.min.js.map \                     <----- oops!  wrong map
//     -F minifiedFile=@wrongmap.min.js \
//     -F overwrite=true

function firstRing() {
  secondRing();
}

function secondRing() {
  thirdRing();
}

function thirdRing() {
  fourthRing();
}

function fourthRing() {
    try {
      // deliberate Reference Error
      console.log(doesntExist)
    } catch (e) {
      console.log('Reference error will be reported, but the stacktrace won\'t make any sense because the map points to the wrong code.')

      bugsnagClient.notify(e, {
        context: 'my stacktrace is all wrong :( - checkout the mapping tab',
      metaData: {
          mapping: {
            filename: "wrongmap.min.js",
            uploaded_map: "randowmap.min.js.map"
          }
          }
      })
    }
}



console.log("here we go....")
firstRing();

// stacktrace shows as:
// Error · I'm so lost....
// randomap.js:15:15A
//    if(A[i-1] > A[i]) {
//      var b = A[i];
//      A[i] = A[i-1];
//      A[i-1] = b;
//      swapped = true;
//    }
//  }
