import "./sass/style.scss";

// const itemDivs = document.querySelectorAll(".item");

// itemDivs.forEach((itemDiv) => {
//   const MyVideo = itemDiv.querySelector("video");

//   itemDiv.addEventListener("click", () => {
//     if (MyVideo.paused) {
//       MyVideo.play();
//     } else {
//       MyVideo.pause();
//       MyVideo.currentTime = 0;
//     }
//   });
// });

const itemDivs = document.querySelectorAll(".item");

itemDivs.forEach((itemDiv) => {
  const MyVideo = itemDiv.querySelector("video");

  itemDiv.addEventListener("mouseover", () => {
    if (!MyVideo.paused) {
      MyVideo.pause();
    }

    MyVideo.play();
  });

  itemDiv.addEventListener("mouseout", () => {
    if (!MyVideo.paused) {
      MyVideo.pause();
      MyVideo.currentTime = 0;
    }
  });
});
