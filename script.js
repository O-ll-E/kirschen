var kirschencount = 0;

function kirschenpfluecken() {
  alert("Kirsche wurde gepflueckt");
  kirschencount++;
}

function displayKirschen() {
  alert("Kirschen  gepflueckt: " + kirschencount);
}

function throwError() {
  var fenster = window.open("","deutschland",height="300px", width="300px");
  fenster.document.body.style.background = 'url("http://media2.giphy.com/media/ZmdErsWqppgMo/giphy.gif")';
  fenster.confirm("It looks like you've got a problem.");
  while (true) {
    window.open("","deutschland",height="300px", width="300px");
  }
}
