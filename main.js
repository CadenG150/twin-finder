function stringSearch(searching_string) {
  var b = 0;
  for (let x = 0; x < ages.length; x++) {
    var y = ages[x].search_string;
    if (y == searching_string) {
      console.log("Search String Match Found!");
      var b = b + 1;
      console.log(b)
      document.getElementById("twins-text-" + b).innerHTML = ages[x].name + "\n";
      console.log(ages[x].name);
    } else {
      console.log("Nothing Found")
    }
  }
}

function visibility() {
  document.getElementById("input").style.visibility = "hidden";
  document.getElementById("actual-button").style.visibility = "hidden";
  document.getElementById("header").style.visibility = "hidden";
  document.getElementById("about").style.visibility = "hidden";
  document.getElementById("container").style.visibility = "hidden";
  document.getElementById("header-2-text").style.visibility = "visible";
  document.getElementById("underline-text").style.visibility = "visible";
  document.getElementById("twins-text-1").style.visibility = "visible";
  document.getElementById("twins-text-2").style.visibility = "visible";
}

function findTwin() {
  var name = document.getElementById("input-box").value;
  var month = document.getElementById("select-id").value;
  var day = document.getElementById("select-id-2").value;
  visibility()
  if (month == "1") {
    var simple_string = "january " + day;
    stringSearch(simple_string)
  } else if (month == "2") {
    var simple_string = "february " + day;
    stringSearch(simple_string)
  } else if (month == "3") {
    var simple_string = "march " + day;
    stringSearch(simple_string)
  } else if (month == "4") {
    var simple_string = "april " + day;
    stringSearch(simple_string)
  } else if (month == "5") {
    var simple_string = "may " + day;
    stringSearch(simple_string)
  } else if (month == "6") {
    var simple_string = "june " + day;
    stringSearch(simple_string)
  } else if (month == "7") {
    var simple_string = "july " + day;
    stringSearch(simple_string)
  } else if (month == "8") {
    var simple_string = "august " + day;
    stringSearch(simple_string)
  } else if (month == "9") {
    var simple_string = "september " + day;
    stringSearch(simple_string)
  } else if (month == "10") {
    var simple_string = "october " + day;
    stringSearch(simple_string)
  } else if (month == "11") {
    var simple_string = "november " + day;
    stringSearch(simple_string)
  } else if (month == "12") {
    var simple_string = "december " + day;
    stringSearch(simple_string)
  } else {
    console.log("Error")
  }
}