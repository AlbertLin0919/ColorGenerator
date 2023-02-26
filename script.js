const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxPaletteBoxes = 32;

const generatePalette = () => {
  container.innerHTML = "";
  for (let i = 0; i < maxPaletteBoxes; i++) {
    //0xffffff是一個16進位的數字
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `
    <div class="rect-box" style="background: ${randomHex}"></div>
    <span class="hex-value">${randomHex}</span>
    `;

    //copy color when it click
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};
//刷新頁面時就會跑一次
generatePalette();

const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex-value");
  navigator.clipboard
    .writeText(hexVal)
    .then(() => {
      colorElement.innerText = "Copied";
      setTimeout(() => (colorElement.innerText = hexVal), 1000);
    })
    .catch(() => alert("Failed to copy the color code !"));
};
refreshBtn.addEventListener("click", generatePalette);
