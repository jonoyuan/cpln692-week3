/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

// Week 3 Lab 1-1: Array Access

var data = [[39.952447, -75.175808, "home"],
            [39.952368, -75.192685, "school"],
            [39.957252, -75.153620, "work"]];

var drawMarkers = function(data) {
  _.each(data, function(mk) {
    L.marker([mk[0],mk[1]])
      .addTo(map)
      .bindPopup(mk[2]);
  })
}
drawMarkers(data);

// Week 3 Lab 1-2: FizzBuzz

var fizzbuzz = (range,factors,text) => {

  let min = range[0];
  let max = range[1];
  let fnum = factors[0];
  let bnum = factors[1];
  let ftxt = "Fizz";
  let btxt = "Buzz";
  if (text !== undefined) {
    ftxt = text[0];
    btxt = text[1];
  }
  let fbtxt = ftxt+btxt;

  let seq = _.range(min,max)

  let seqfb = [];
  _.each(
    seq,
    (x) => {
      if (x%fnum === 0 && x%bnum === 0) {
        seqfb.push(fbtxt);
      } else if (x%fnum === 0) {
        seqfb.push(ftxt);
      } else if (x%bnum === 0) {
        seqfb.push(btxt);
      } else {seqfb.push(x);}
    }
  );

  return seqfb;

}

var gobutton = function() {

  document.getElementById('output').innerHTML = ''

  let range = [
    Number(document.getElementById('fbform').elements['lower'].value),
    Number(document.getElementById('fbform').elements['upper'].value)
  ];
  let factors = [
    Number(document.getElementById('fbform').elements['fnum'].value),
    Number(document.getElementById('fbform').elements['bnum'].value)
  ]
  let text = [
    document.getElementById('fbform').elements['ftxt'].value,
    document.getElementById('fbform').elements['btxt'].value
  ]

  _.each(
    fizzbuzz(range,factors,text),
    out => {
      document.getElementById('output').innerHTML += (out+'<br>');
      console.log(out);
    }
  )

}

document.getElementById('fbform').onkeydown = function(e){
  if(e.keyCode == 13){gobutton();}
};
