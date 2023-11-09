export default function mobileMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const logo = document.getElementById("logo");
  const imageLogoFooter = new URL(
    "./images/logo-bookmark-footer.svg",
    import.meta.url,
  );
  const imageLogo = new URL("./images/logo-bookmark.svg", import.meta.url);
  console.log(logo);
  const navToggle = () => {
    btn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");

    if (menu.classList.contains("flex")) {
      logo.setAttribute("src", imageLogoFooter);
    } else {
      logo.setAttribute("src", imageLogo);
    }
    console.log(logo);
  };
  btn.addEventListener("click", navToggle);
}
