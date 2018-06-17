// global variable declaration
var slideIndex = 1
var check = 0
var score = 0
var imgvalue = [1, 3, 4, 5]
var il = document.getElementsByClassName('mySlides')
showDivs(slideIndex)

function Check() {
  return empty()
}

function plusDivs(n) {
  showDivs(slideIndex += n)
  scorecalculate()
  ClearFields()
}

function showDivs(n) {
  var i;
  for (i = 0; i < il.length; i++) {
    il[i].style.display = "none";
  }
  if (n >= il.length) {
    n = il.length; //to important dont know why
    il[n - 1].style.display = "block";
    console.log("image no." + (n - 1))
  }
  /*if (n < 1) {
    slideIndex = x.length
  }*/
  if (n < il.length) {
    il[n - 1].style.display = "block";
    console.log("image no." + (n - 1))
  }
}

function scorecalculate() {
  if (check >= imgvalue.length) {
    score = 0;
    check = 0;
    document.getElementById("score").innerHTML = 0;
  }
  var ival = document.getElementById("ival").value;
  if (ival == imgvalue[check]) {
    document.getElementById("score").innerHTML = ++score;
  }
  ++check;
  console.log("check value" + check + "score" + score)
}

function ClearFields() {

  document.getElementById("ival").value = "";
}

function empty() {
  var x;
  x = document.getElementById("ival").value;
  if (x == "") {
    console.log("slideIndex value:" + slideIndex);
    console.log("x.length value:" + il.length);
    if (slideIndex <= il.length) {
      alert("please enter a value");
      return false
    }
  } else {
    plusDivs(1)
  }
}