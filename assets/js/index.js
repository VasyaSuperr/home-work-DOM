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
console.log(`Extended version`);

const user = {
  firstName: `Test`,
  lastName: `Testovych`,
  profilePhoto: `https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg`,
  birthday: new Date(`2000-05-16`),
  nickname: `super dev`,
  likesCount: 10,
};

const informationUserButton = document.querySelector(`.informationUser`);
const userInfoContainer = document.getElementById("user-info");

const { firstName, lastName, profilePhoto, birthday, nickname, likesCount } =
  user;

function downloadInformationUser(event) {
  const article = document.createElement("article");
  article.classList.add("userCard");

  const img = document.createElement("img");
  img.classList.add("userPhoto");
  img.src = profilePhoto;
  img.alt = "Photo of User";

  const h3 = document.createElement("h3");
  h3.classList.add("fullName");
  h3.textContent = `${firstName} ${lastName}`;

  const p1 = document.createElement("p");
  p1.classList.add("birthday");
  p1.textContent = `Birthday: ${birthday}`;
  p1.setAttribute("title", new Date().getFullYear() - birthday.getFullYear());

  const p2 = document.createElement("p");
  p2.classList.add("nickname");
  p2.textContent = `Nickname: ${nickname}`;

  const p3 = document.createElement("p");
  p3.classList.add("likesCount");
  p3.textContent = `Likes: ${likesCount}`;

  const heart = document.createElement("span");
  heart.classList.add("heart");
  //   <i class="fa-regular fa-heart"></i>
  heart.innerHTML = `<i class="fa-solid fa-heart"></i>`;

  heart.addEventListener("click", () => {
    heart.classList.toggle("liked");
  });

  article.appendChild(img);
  article.appendChild(h3);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(heart);

  userInfoContainer.appendChild(article);
}

informationUserButton.onclick = downloadInformationUser;
