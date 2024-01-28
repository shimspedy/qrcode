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

// Create function barcode
JsBarcode("#barcode", "123456789");

const entry = document.querySelector("#entry");
const printButton = document.querySelector("#print-button");

entry.focus();

let text = "";

entry.addEventListener("keyup", (e) => {
  if (!e.target.value) {
    JsBarcode("#barcode", "123456789");
  }
  text = e.target.value;
  JsBarcode("#barcode", text);
});

printButton.addEventListener("click", () => {
  printJS("barcode", "html");
});
