(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  if (!button) return;

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function updateLabel() {
    var theme = currentTheme();
    var next = theme === "dark" ? "light" : "dark";
    var text = (theme === "dark" ? "Dark" : "Light") + " mode (click for " + next + " mode)";
    button.setAttribute("aria-label", text);
    button.setAttribute("title", text);
  }

  button.addEventListener("click", function () {
    var theme = currentTheme() === "dark" ? "light" : "dark";
    root.classList.add("theme-transition");
    root.setAttribute("data-theme", theme);
    window.setTimeout(function () {
      root.classList.remove("theme-transition");
    }, 450);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    updateLabel();
  });

  updateLabel();
})();
