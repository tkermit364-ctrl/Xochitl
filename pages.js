function getPages() {
  return JSON.parse(localStorage.getItem("pages")) || [];
}

function savePages(pages) {
  localStorage.setItem("pages", JSON.stringify(pages));
}

function createPage() {
  const name = document.getElementById("newPageName").value;
  if (!name) return;

  const pages = getPages();
  pages.push({ name: name, content: "" });
  savePages(pages);

  renderPages();
}

function openPage(index) {
  localStorage.setItem("currentPage", index);
  window.location.href = "editor.html";
}

function renderPages() {
  const list = document.getElementById("pageList");
  list.innerHTML = "";

  const pages = getPages();

  pages.forEach((page, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<button onclick="openPage(${index})">${page.name}</button>`;
    list.appendChild(li);
  });
}

renderPages();
