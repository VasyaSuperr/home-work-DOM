console.log(`Basic level`);
console.log(`Task 1`);

const changeTextBtn = document.querySelector(`.changeTextBtn`);

// function eventChangeTextBtn(event) {
//   changeTextBtn.style.color = "green";
// }
// changeTextBtn.onclick = eventChangeTextBtn;

changeTextBtn.onclick = (e) => {
  changeTextBtn.style.color = `green`;
};

console.log(`Task 2`);

const changeColorBtn = document.querySelector(`.changeColorBtn`);

changeColorBtn.onclick = (e) => {
  changeColorBtn.style.backgroundColor = `orange`;
};
