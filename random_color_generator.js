let hexCodeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let randomArrayHexCode = [];
let myP = document.createElement("p");
let myBtn = document.getElementById("btn");
document.body.cssText = "display:grid; place-item : center ; height:100vh;";

myP.style.cssText =
  "  font-family: Arial, Helvetica, sans-serif; color : white ; width:100% ; display: grid;place-items: center;transform: translate(-50%,-50%);position: absolute;top: 35%;left: 50%; ";

let randomHexCode;
function createRandomColor() {
  randomArrayHexCode = [];
  for (let i = 0; i < 6; i++) {
    randomArrayHexCode.push(
      hexCodeArray[Math.trunc(Math.random() * hexCodeArray.length)]
    );
  }
  randomHexCode = `#${randomArrayHexCode.join("")}`;
  myP.innerText = `The Random HexCode For This Is : ${randomHexCode}`;
  document.body.style.cssText = ` background-color :${randomHexCode} ; display:grid; place-items : center `;
}
document.body.appendChild(myP);

myBtn.style.cssText =
  `display: grid;place-items: center;
  transform: translate(-50%,-50%);
  position: absolute;
  top: 50%;left: 50% ; cursor: pointer;
  border: 1px solid #ddd; border-radius:6px;
  padding : 10px 14px`;


myBtn.addEventListener("click", createRandomColor);
