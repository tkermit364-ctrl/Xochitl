function goBack() {
  window.location.href = "pages.html";
}

const pages = JSON.parse(localStorage.getItem("pages")) || [];
const index = localStorage.getItem("currentPage");

const page = pages[index];

document.getElementById("pageTitle").innerText = page.name;

const editor = document.getElementById("editor");
editor.innerHTML = page.content;

// Auto-save while typing
editor.addEventListener("input", () => {
  pages[index].content = editor.innerHTML;
  localStorage.setItem("pages", JSON.stringify(pages));
});
