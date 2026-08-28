function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5igyLEn9OwI":
        Script1();
        break;
      case "6pBpapWD4rF":
        Script2();
        break;
      case "6Ug4bLl8Je4":
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

