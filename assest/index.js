
const panle = document.querySelectorAll(".panle");

panle.forEach((panle) => {
  panle.addEventListener("click", () => {
    removeActiveClasses();
    panle.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panle.forEach((panle) => {
    panle.classList.remove("active");
  });
};















