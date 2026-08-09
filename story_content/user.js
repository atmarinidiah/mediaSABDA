function ExecuteScript(strId)
{
  switch (strId)
  {
      case "61AJSWtT2gD":
        Script1();
        break;
      case "6L3FDc8DLJy":
        Script2();
        break;
      case "6SjadITdkJw":
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

