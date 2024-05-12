import "./sass/style.scss";

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
