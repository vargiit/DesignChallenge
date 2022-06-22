const productWrapper = document.querySelector(".product-wrapper");
const dot = document.querySelectorAll(".dot");

let activeDotNum = 0;

dot.forEach((dot, index) => {
  dot.setAttribute("data-num", index);
  dot.addEventListener("click", (e) => {
    let clickedDotNum = e.target.dataset.num;
    if (clickedDotNum == activeDotNum) {
      return;
    } else {
      let displayAreaWidth =
        document.querySelector(".display-area").clientWidth;
      console.log(activeDotNum);
      let pixelsToMove = -displayAreaWidth * clickedDotNum;

      productWrapper.style.transform = `translateX(${pixelsToMove}px)`;

      dot[activeDotNum].classList.remove("active");
      dot[clickedDotNum].classList.add("active");
      activeDotNum = clickedDotNum;
    }
  });
});
