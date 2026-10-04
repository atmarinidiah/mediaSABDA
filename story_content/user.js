function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61cPkPncd8C":
        Script1();
        break;
      case "6Yq2zdX5jxZ":
        Script2();
        break;
      case "5kjmp7QuIGb":
        Script3();
        break;
  }
}

function Script1()
{
  var music = window.parent.document.getElementById("bgMusic");

if (music) {
    music.muted = !music.muted;
    localStorage.setItem("musicMuted", music.muted ? "true" : "false");

    if (!music.muted) {
        music.play();
    }
}
}

function Script2()
{
  var music = window.parent.document.getElementById("bgMusic");

if (music) {
    music.muted = !music.muted;
    localStorage.setItem("musicMuted", music.muted ? "true" : "false");

    if (!music.muted) {
        music.play();
    }
}
}

function Script3()
{
  var music = window.parent.document.getElementById("bgMusic");

if (music) {
    music.muted = !music.muted;
    localStorage.setItem("musicMuted", music.muted ? "true" : "false");

    if (!music.muted) {
        music.play();
    }
}
}

