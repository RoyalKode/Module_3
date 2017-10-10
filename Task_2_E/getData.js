function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          weatherFunction(this);
      }
    };
xmlhttp.open("GET", "http://sukkergris.no/forecast/" , true);
xmlhttp.send();
}


function weatherFunction(xml) {

  var parser = new DOMParser();
  var xmlDoc = xml.responseXML;

  var times = xmlDoc.querySelectorAll("forecast>tabular>time");

  for (var i = 0; i < times.length; i++) {
    var t = times[i];

    var from = t.getAttribute("from");
    var to   = t.getAttribute("to");

    var a = t.children[3];
    var b = t.children[1];

    var time;
    time = (i % 2 == 0) ? from : to;
    var x = a.getAttribute("mps");
    var y = b.getAttribute("value");

    addData(windChart, time , x, y);

  }
}
