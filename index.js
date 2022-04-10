const fishList = document.querySelectorAll(".fish");

fishList.forEach(function (i) {
  console.log(i);
  i.addEventListener("click", () => {
    i.style.display = "none";
  });
});
