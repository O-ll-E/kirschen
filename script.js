var kirschencount = 0;

function kirschenpfluecken() {
  var temp = Math.floor(Math.random()*9+1);
  alert("Kirschen wurden gepflueckt");
  alert(temp+0);
  kirschencount = kirschencount+temp;
}

function displayKirschen() {
  alert("Kirschen  gepflueckt: " + kirschencount);
}

function throwError() {
  var fenster = window.open("","",height="300px", width="300px");
  fenster.document.body.style.background = 'url("http://media2.giphy.com/media/ZmdErsWqppgMo/giphy.gif")';
  fenster.confirm("It looks like you've got a problem.");
}
