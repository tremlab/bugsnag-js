// this code is not used at all in the app, but will use its source maps to demonstrate what errors look like when the wrong map is uplaoded.

function bubbleSort(A){
var swapped,
    len = arr.length;

if(len === 1) return;

do {
  swapped = false;
  for(var i=1;i<len;i++) {
    if(A[i-1] > A[i]) {
      var b = A[i];
      A[i] = A[i-1];
      A[i-1] = b;
      swapped = true;
    }
  }

}
while(swapped)
}

var arr = [1, 6, 9, 5, 3, 4, 2, 12, 4567, 5, 34];
bubbleSort(arr);