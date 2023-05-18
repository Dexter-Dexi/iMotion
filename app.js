window.onload = () => {
  const B = document.getElementById("btn");
  const M = document.getElementById("menu");
  const C = document.getElementById("cover");
  const L = document.getElementById("cls");
  const H = document.getElementById("ham");
  let state = false;
  B.addEventListener("click", () => {
    if (state == false) {
      M.style.display = "block";
      C.style.display = "block";
      /* C.forEach((element) => {
        element.style.display = "block";
      }); */

      H.src =
        "./manage-landing-page-master/manage-landing-page-master/images/icon-close.svg";
      state = true;
    } else {
      M.style.display = "none";
      C.style.display = "none";
      H.src =
        "./manage-landing-page-master/manage-landing-page-master/images/icon-hamburger.svg";
      state = false;
    }
  });

  /*   L.addEventListener("click", () => {
    M.style.display = "none";
    C.style.display = "none";
  }); */
};
