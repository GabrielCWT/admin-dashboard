const icons = document.querySelectorAll(".icon-container svg");

for (const icon of icons) {
  icon.style.cursor = "pointer";
  icon.addEventListener("click", changeIcon);
  icon.addEventListener("mouseover", hovering);
  icon.addEventListener("mouseleave", hovering);
}

function changeIcon(e) {
  let newIconPath = checkIcon(e.currentTarget.getAttribute("data-src"));
  e.currentTarget.setAttribute("data-src", newIconPath);
}

function checkIcon(path) {
  switch (path) {
    case "images/favorite-icon.svg":
      return "images/favorite-added.svg";
    case "images/favorite-added.svg":
      return "images/favorite-icon.svg";
    case "images/bookmark-icon.svg":
      return "images/bookmark-added.svg";
    case "images/bookmark-added.svg":
      return "images/bookmark-icon.svg";
  }
}

function hovering(e) {
  e.currentTarget.classList.toggle("hovering");
}

const themeIcon = document.querySelector("#theme-icon");
themeIcon.style.cursor = "pointer";
themeIcon.addEventListener("mouseover", hovering);
themeIcon.addEventListener("mouseleave", hovering);
themeIcon.addEventListener("click", () =>
  document.querySelector("html").classList.toggle("dark")
);
