import "../scss/style.scss";

window.onload = function () {
  const header_effect = document.querySelector("header");
  const main_article1 = document.querySelector(".main__article1");
  const main_article2 = document.querySelector(".main__article2");
  const main_article3 = document.querySelector(".main__article3");

  window.addEventListener("scroll", scrollEffect);
  window.addEventListener("scroll", showCopyScrollDown);
  window.addEventListener("scroll", showCopyScrollUp);
  window.addEventListener("scroll", deleteCopy);

  function scrollEffect() {
    if (window.scrollY >= 1) {
      header_effect.style.backgroundColor = "white";
      header_effect.style.transition = "0.4s ease";
      header_effect.style.boxShadow = "0.3px 0px 10px 1px gray";
    } else {
      header_effect.style.backgroundColor = "";
      header_effect.style.boxShadow = "";
    }
  }

  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    console.log(main_article1);
  });

  function showCopyScrollDown() {
    if (window.scrollY >= 1790 && window.screenY <= 3680) {
      main_article1.style.opacity = "0";
      main_article2.style.opacity = "1";
      main_article2.style.transition = "1s ease";
    } else if (window.screenY >= 2720) {
      main_article2.style.opacity = "0";
      main_article3.style.opacity = "1";
      main_article3.style.transition = "1s ease";
    }
  }
  function showCopyScrollUp() {
    if (window.scrollY <= 1790) {
      main_article1.style.opacity = "1";
      main_article2.style.opacity = "0";
    } else if (1790 <= window.screenY && window.screenY <= 3680) {
      main_article2.style.opacity = "1";
      main_article3.style.opacity = "0";
    }
  }

  function deleteCopy() {
    if (window.scrollY >= 4153) {
      main_article2.style.display = "none";
      main_article1.style.display = "none";
      main_article3.style.display = "none";
    }
  }
};
