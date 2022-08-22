const reactionOption = [
  {
    like: "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e",
    angry:
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e",
    smile:
      "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='81.902%25'%3e%3cstop offset='0%25' stop-color='%23FC607C'/%3e%3cstop offset='100%25' stop-color='%23D91F3A'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008'/%3e%3cpath fill='url(%23e)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5'/%3e%3cpath fill='%232A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.371-.78.011-1.708.255-2.506.612-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604a7.077 7.077 0 00-1.315-.768c-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 011.552.925zm3.577 0a8.953 8.953 0 011.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.029 7.029 0 00-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788z'/%3e%3c/g%3e%3c/svg%3e",
  },
];
const reaction = [
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

const liked = [
  {
    like: "./img/like/like.png",
    paragraph: "like",
  },
  {
    like: "./img/like/comment.png",
    paragraph: "comment",
  },
  {
    like: "./img/like/share.png",
    paragraph: "smile",
  },
];

const postFeed = [
  {
    profile: "./img/mina.jpg",
    name: "Mina Gonzales",
    time: "20 ",
    private: "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/0QOZ5Rw18zW.png",
    feed: `The Department of Transportation (DOTr) hopes to keep China as the
    funder for three railways in Luzon and Mindanao, as it doubts
    whether Japan can finance additional infrastructure due to its
    exposure to big-ticket projects.`,
    imgFeed: `https://media.philstar.com/photos/2022/08/19/rail2022-07-1921-55-17_2022-08-19_19-00-10.jpg`,
    feedName: "Philstar.com",
    feedPost: "Goverment still wants China as railway loan source",
    feedParagraph: `The Department of Transportation hopes to keep China as the
    funder of three railways in Luzon and ...`,
    reactionOption,
    reaction,
    liked,
  },
  {
    profile: "./img/mina.jpg",
    name: "Mina Gonzales",
    time: "20 ",
    private: "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/0QOZ5Rw18zW.png",
    feed: `The Department of Transportation (DOTr) hopes to keep China as the
    funder for three railways in Luzon and Mindanao, as it doubts
    whether Japan can finance additional infrastructure due to its
    exposure to big-ticket projects.`,
    imgFeed: `https://media.philstar.com/photos/2022/08/19/rail2022-07-1921-55-17_2022-08-19_19-00-10.jpg`,
    feedName: "Philstar.com",
    feedPost: "Goverment still wants China as railway loan source",
    feedParagraph: `The Department of Transportation hopes to keep China as the
    funder of three railways in Luzon and ...`,
    reactionOption,
    reaction,
    liked,
  },
  {
    profile: "./img/mina.jpg",
    name: "Mina Gonzales",
    time: "20 ",
    private: "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/0QOZ5Rw18zW.png",
    feed: `The Department of Transportation (DOTr) hopes to keep China as the
    funder for three railways in Luzon and Mindanao, as it doubts
    whether Japan can finance additional infrastructure due to its
    exposure to big-ticket projects.`,
    imgFeed: `https://media.philstar.com/photos/2022/08/19/rail2022-07-1921-55-17_2022-08-19_19-00-10.jpg`,
    feedName: "Philstar.com",
    feedPost: "Goverment still wants China as railway loan source",
    feedParagraph: `The Department of Transportation hopes to keep China as the
    funder of three railways in Luzon and ...`,
    reactionOption,
    reaction,
    liked,
  },
];

const main = document.querySelector(".main");

postFeed.forEach((user) => {
  const like = user.reactionOption[0].like;
  const angry = user.reactionOption[0].angry;
  const smile = user.reactionOption[0].smile;

  const reaction = user.liked.map((data) => {
    return data.like;
  });
  const reactParagraph = user.liked.map((data) => {
    return data.paragraph;
  });

  const html = `<div class="feed">
  <div class="feed-user">
    <div class="user-img active">
       <img src="${user.profile}" alt="" /> 
    </div>
    <div class="feed-user--text">
      <h1>${user.name}</h1>

      <div class="feed-user--text-img">
        <p>${user.time}m .</p> 
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/0QOZ5Rw18zW.png"
          alt=""
        />
      </div>
    </div>
    <div class="user-img left">
      <i class="material-symbols-outlined"> more_horiz </i>
    </div>
  </div>

  <div class="feed-paragraph">
    <p>
      ${user.feed}
    </p>
  </div>

  <div class="feed-img">
    <img
      src="${user.imgFeed}"
      alt=""
    /> 
    <div class="feed-img--text">
      <p>${user.feedName}</p>
      <h1>${user.feedPost}</h1>
      <p>
        ${user.feedParagraph}
      </p>
    </div>

    <div class="feed-reactions">
      <div class="feed-reactions--smile">
        <div class="feed-reactions-option">
           <img src=".${like}" alt="" />
          <img src=".${angry}" alt="" />
          <img src=".${smile}" alt="" />
          <p>arteezy and 13k others</p>
        </div>
        <div class="feed-reactions-text">
          <p>18 Comments</p>
          <p>1 Shared</p>
        </div>
      </div>

      <div class="feed-actions">
      <div class="feed-action-like">
      <img src="${reaction[0]}" alt="">
      <p>${reactParagraph[0]}</p>
    </div>
    <div class="feed-action-like">
    <img src="${reaction[1]}" alt="">
    <p>${reactParagraph[1]}</p>
  </div>
  <div class="feed-action-like">
  <img src="${reaction[2]}" alt="">
  <p>${reactParagraph[2]}</p>
  </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  main.insertAdjacentHTML("beforeend", html);
});
