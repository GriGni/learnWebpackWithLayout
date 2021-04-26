import "../css/reset.scss";
import "../css/style.scss";

function check() {
  let event = document.querySelector(".clickEvent");
  event.addEventListener("click", () => {
    let dropdownMenu = document.querySelector("#dropMenu");
    console.dir(dropdownMenu);
    // dropdownMenu.style = {
    //   display="block"
    // }
  });
}

check();
