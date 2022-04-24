const outputDiv = document.getElementById("output");

const set1box = document.getElementById("set1");
const set2box = document.getElementById("set2");
const set3box = document.getElementById("set3");
const set4box = document.getElementById("set4");
const length = document.getElementById("length");

const customSetBox = document.getElementById("customSet");
const customSetText = document.getElementById("customSetText");

window.onload = (event) => {
  customSetText.value = document.cookie.split("=")[1];
};

function saveCustomSet() {
  if (document.cookie) {
    document.cookie =
      "customSet=" + customSetText.value + "; SameSite=None; Secure";
  }
}
function generate() {
  let set = "";
  if (set1box.checked) {
    set = set + ",😚,☺️,😍,😘,🥰";
  }
  if (set2box.checked) {
    set = set + ",❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍";
  }
  if (set3box.checked) {
    set = set + ",❤️‍🔥,❣️,💕,💞,💓,💗,💖,💘,💝";
  }
  if (set4box.checked) {
    set = set + ",💋,♥️,🥂,🌹,🏵️,🌺,🌸,🔥";
  }
  if (customSetBox.checked) {
    set = set + customSetText.value;
  }

  //Create array
  set = set.substring(1, set.length);
  setArr = set.split(",");

  let out = "";
  for (let i = 0; i < length.value; i++) {
    out = out + setArr[Math.floor(Math.random() * setArr.length)];
  }

  let outputTextBox = document.createElement("textarea");
  outputTextBox.rows = 7;
  outputTextBox.cols = 60;
  outputTextBox.innerHTML = out;
  outputDiv.append(outputTextBox);
}
