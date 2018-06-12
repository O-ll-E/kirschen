var kirschencount = 0;

function init(){
  kirschencount = prompt("Wieviele Kirschen haben Sie schon gepflueckt?");
  kirschencount = Number(kirschencount);
  if (isNaN(kirschencount)) {
    kirschencount = 0;
    return;
  }
}

function kirschenpfluecken() {
  var temp = Math.floor(Math.random()*9+1);
  alert("Kirschen wurden gepflueckt");
  alert(temp+0);
  kirschencount = Number(kirschencount)+Number(temp);
}

function displayKirschen() {
  alert("Kirschen  gepflueckt: " + kirschencount);
}

function throwError() {
  var fenster = window.open("","",height="300px", width="300px");
  fenster.document.body.style.background = 'url("http://media2.giphy.com/media/ZmdErsWqppgMo/giphy.gif")';
  fenster.confirm("It looks like you've got a problem.");
}
