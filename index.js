// const profilepic = document.getElementById("data");

// profilepic.addEventListener("click", () => {
//   profilepic.classList.toggle("dropdown");
//   console.log("lol");
// });

const add = document.getElementById("add");
const messenger = document.getElementById("messenger");
const notification = document.getElementById("notification");
const profilepic = document.getElementById("profilepic");

// stories ///

const stories = document.getElementById("stories");
const reels = document.getElementById("reels");
const rooms = document.getElementById("rooms");

// stories

// removing elements///
const createData = document.querySelector(".create");
const chat = document.querySelector(".chat");
const notif = document.querySelector(".notification");
const profile = document.querySelector(".profilepic");

const body = document.getElementById("container");

body.addEventListener("click", () => {
  createData.classList.add("display");
  chat.classList.add("display");
  notif.classList.add("display");
  profile.classList.add("display");
});

add.addEventListener("click", () => {
  createData.classList.toggle("display");

  chat.classList.add("display");
  notif.classList.add("display");
  profile.classList.add("display");
});

messenger.addEventListener("click", () => {
  chat.classList.remove("display");

  createData.classList.add("display");
  notif.classList.add("display");
  profile.classList.add("display");
});

notification.addEventListener("click", () => {
  notif.classList.toggle("display");

  createData.classList.add("display");
  chat.classList.add("display");
  profile.classList.add("display");
});

profilepic.addEventListener("click", () => {
  profile.classList.toggle("display");

  createData.classList.add("display");
  chat.classList.add("display");
  notif.classList.add("display");
});

// nav.forEach((data) => {
//   const sideNav = document.createElement("div");
//   const sideimg = document.createElement("div");
//   const img = document.createElement("img");
//   const h1 = document.createElement("h1");

//   h1.textContent = `${data.name}`;
//   sideNav.className = "side__nav";
//   sideimg.className = "side__nav-img";
//   img.setAttribute("src", `${data.img}`);
//   sideimg.appendChild(img);
//   sideNav.appendChild(sideimg);
//   sideNav.appendChild(h1);
//   const box = document.getElementById("aside").appendChild(sideNav);
// });

nav.forEach((img) => {
  const createReels = document.createElement("div");
  const imgUser = document.createElement("img");
  imgUser.setAttribute("src", `${img.img}`);
  createReels.className = "section-create-reels";

  createReels.appendChild(imgUser);
  document.querySelector(".section-reels").appendChild(createReels);
});

const story = document.querySelector(".section-stories");
const reelx = document.querySelector(".section-reels ");
const sectionRooms = document.querySelector(".section-rooms");

stories.addEventListener("click", () => {
  sectionRooms.classList.add("display");
  story.classList.remove("display");
  reelx.classList.add("display");
});
reels.addEventListener("click", () => {
  story.classList.add("display");
  sectionRooms.classList.add("display");
  reelx.classList.remove("display");
});

rooms.addEventListener("click", () => {
  sectionRooms.classList.remove("display");
  reelx.classList.add("display");
  story.classList.add("display");
});

const post = document.querySelector(".post--data-input");
const backdrop = document.querySelector(".backdrop");
const boxshadow = document.querySelector(".boxshadow");
// slide option more
const option = document.querySelector(".backdrop-option-friends");
//

post.addEventListener("click", () => {
  backdrop.classList.remove("display");
  boxshadow.classList.remove("display");

  option.addEventListener("click", () => {
    const sample = document.querySelector(".audience");

    sample.classList.remove("display");
    backdrop.classList.add("display");

    sample.style.transform = "translate(-50%, -50%)";
  });
});

boxshadow.addEventListener("click", () => {
  backdrop.classList.add("display");
  boxshadow.classList.add("display");
});

const close = document.querySelector(".backdrop-close");

close.addEventListener("click", () => {
  backdrop.classList.add("display");
  boxshadow.classList.add("display");
});

// try

const selectOption = [
  {
    audience: "Friends",
    paragraph: "Your Friends on Facebook",
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/GgYVAS1o2Dp.png",
  },
  {
    audience: "Friend except..",
    paragraph: "Freinds, Except: Alfredo Gomez",
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/_OLjeOMXK05.png",
  },
  {
    audience: "Only me",
    paragraph: "",
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/fxRwLKfcAmo.png",
  },
  {
    audience: "Specific friends",
    paragraph: "Only show to some friends",
    img: "    https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/xZG_j_BgiWu.png",
  },
  {
    audience: "Custom",
    paragraph: "Include and exclude friends and lists",
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/417zloHnnzB.png",
  },
  {
    audience: "Acquaintances",
    paragraph: "Your customs list",
    img: "https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/j_BoR9QibCZ.png",
  },
];

const public = document.getElementById("public");
const friends = document.getElementById("friends");

const radiobtn = document.querySelector(".audience--select");
const radioOption = document.querySelector(".audience--option");
const radioToggle = document.querySelector(".audience--radio");
const radio = document.querySelector(".audience--radio-active");
const closed = document.querySelector(".audience-close-close");

const justtry = document.querySelector(".option");

closed.addEventListener("click", () => {
  document.querySelector(".audience").classList.add("display");
  backdrop.classList.remove("display");
});

public.addEventListener("click", () => {
  radioOption.classList.toggle("active");
  radioToggle.classList.toggle("active");
  radio.classList.toggle("active");
});

selectOption.forEach((value) => {
  const sample = value.audience.split(" ");

  const html = ` <div class="audience--option" id="${sample[0]}">
  <div class="audience--option--rounded">
    <img
      src="${value.img}"
      alt=""
    />
  </div>
  <div class="audience--option-text">
    <h2>${value.audience}</h2>
    <p>${value.paragraph}</p>
  </div>

  <div class="audience--radio">
    <div class="audience--radio-active"></div>
  </div>
</div>`;

  justtry.insertAdjacentHTML("beforeend", html);

  document.getElementById(`${sample[0]}`).addEventListener("click", () => {
    radioOption.classList.toggle("active");
    radioToggle.classList.toggle("active");
    radio.classList.toggle("active");
  });
});

const toggleSide = document.querySelector(".navigation__nav.toggle");
const closeSide = document.querySelector(".side__nav span");
toggleSide.addEventListener("click", () => {
  const aside = document.getElementById("aside");

  aside.style.left = "0";

  const style = getComputedStyle(aside);
  const width = style.width;
  const zindex = style.zIndex;
  aside.classList.remove("display");

  // console.log(zindex);

  if (width === "96px") {
    aside.style.width = "100%";
    console.log("clicked");
  }
  if (zindex === "150") {
    aside.classList.remove("display");
  }
});

closeSide.addEventListener("click", () => {
  const aside = document.getElementById("aside");
  aside.style.left = "-40rem";

  aside.classList.add("display");
});
