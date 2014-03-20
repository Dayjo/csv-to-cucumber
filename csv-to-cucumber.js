document.getElementById('tocucumber').onclick=function(){

  var csv = document.getElementById('input').value.trim();

  csv = csv.replace(/,/g, " | ");
  /*jshint multistr: true */
  csv = csv.replace(/(\r\n|\n|\r)/gm, " |\n| ");

  csv = "| " + csv + " |";

  document.getElementById('output').value = csv;

};
