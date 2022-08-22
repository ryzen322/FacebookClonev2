const userActive = [
  {
    img: "./img/chayoung.jpg",
    name: "Sana Namazaki",
  },
  {
    img: "./img/jennie.jpg",
    name: "Jennie Kim",
  },
  {
    img: "./img/sana.jpg",
    name: "Sana Gonzales",
  },
  {
    img: "./img/tsuyu.jpg",
    name: "tsuyu ",
  },
  {
    img: "./img/nayeon.jpg",
    name: "Nayeon Nayeon",
  },
];

const active = document.querySelector(".active-chat");

console.log(active);
userActive.forEach((user) => {
  const html = `<div class="active-user active">
    <div class="active-user-img">
      <img src="${user.img}" alt="" />
      <div class="active-active"></div>
    </div>
    <h1>${user.name}</h1>
  </div> `;

  active.insertAdjacentHTML("beforeend", html);
});

const groups = [
  {
    img: "/img/vuejs.png",
    name: "Vue js Group",
  },
  {
    img: "/img/nodejs.png",
    name: "Node js",
  },
  {
    img: "img/reactjs.png",
    name: "React js",
  },
  {
    img: "/img/angularjs.png",
    name: "Angular js",
  },
  {
    img: "/img/bluecore.jpg",
    name: "Bluecore",
  },
];

const group = document.querySelector(".groups");

console.log(active);
groups.forEach((user) => {
  const html = `<div class="active-user active">
    <div class="active-user-img">
      <img src="${user.img}" alt="" />
      <div class="active-active"></div>
    </div>
    <h1>${user.name}</h1>
  </div> `;

  group.insertAdjacentHTML("beforeend", html);
});

const friendRequest = [
  {
    img: "./img/chayoung.jpg",
    name: "Sana Minasato",
    time: "4d",
    friends: "14",
  },
  {
    img: "./img/nayeon.jpg",
    name: "Nayeon Nayeon",
    time: "9d",
    friends: "100",
  },
];

const request = document.querySelector(".request");

friendRequest.forEach((user) => {
  const html = ` <div class="friend-request">
    <div class="friend-request-img">
      <img src="${user.img}" alt="" />
    </div>
    <div class="friend-request-option">
      <div class="friend-text">
        <h2>${user.name}</h2>
        <p>${user.time}</p>
      </div>
      <div class="friend-text">
        <p>${user.friends} mutual friends</p>
      </div>
      <div class="btn-friend">
        <button class="btn btn-confirm">Confirm</button>
        <button class="btn btn-delete">Delete</button>
      </div>
    </div>
  </div>`;

  request.insertAdjacentHTML("beforeend", html);
});
