// Create function qr

function qr() {
    var t = document.getElementById("text").value;
    document.getElementById(
      "image"
    ).innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${t}"></img>`;
  }
  const ranger = document.querySelector("#speed");
const speedUpdate = () => {
  document.documentElement.style.setProperty("--speed", `${ranger.value}s`);
};
ranger.addEventListener("input", speedUpdate);

// Create function qr

function qr() {
  var t = document.getElementById("text").value;
  document.getElementById(
    "image"
  ).innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${t}"></img>`;
}
