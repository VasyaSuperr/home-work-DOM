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

console.log(`Done`);
console.log(`Task 2`);

const changeColorBtn = document.querySelector(`.changeColorBtn`);

changeColorBtn.onclick = (e) => {
  changeColorBtn.style.backgroundColor = `orange`;
};

console.log(`Done`);
console.log(`Task 3`);

const patrickImg = document.querySelector(`.patrickImg`);

function changeImg(event) {
  patrickImg.src = `https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/30041/1703153928_Spongebob-40.png&width=600&height=600&quality=90&format=auto&fit=pad`;
  patrickImg.alt = `Patrick with a ball`;
}

patrickImg.onmouseenter = changeImg;
