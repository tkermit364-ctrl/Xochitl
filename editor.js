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

  /*
Xochitl Editor Enhancements
- Add delete page button
- Add rich text formatting (bold, headers)
Assumes a simple contenteditable or editor.js-style setup.
*/

/* =========================
   1. DELETE PAGE BUTTON
   ========================= */

// Example: if each page is a DOM element like:
// <div class="page" data-id="123">...</div>

function createDeleteButton(pageEl) {
  const btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.className = "delete-page-btn";

  btn.addEventListener("click", () => {
    const confirmDelete = confirm("Delete this page?");
    if (!confirmDelete) return;

    const pageId = pageEl.dataset.id;

    // Remove from DOM
    pageEl.remove();

    // Optional: remove from localStorage / backend
    deletePageFromStorage(pageId);
  });

  return btn;
}

function deletePageFromStorage(pageId) {
  let pages = JSON.parse(localStorage.getItem("pages") || "[]");
  pages = pages.filter(p => p.id !== pageId);
  localStorage.setItem("pages", JSON.stringify(pages));
}

// Attach to all pages
function attachDeleteButtons() {
  document.querySelectorAll(".page").forEach(page => {
    if (!page.querySelector(".delete-page-btn")) {
      const btn = createDeleteButton(page);
      page.appendChild(btn);
    }
  });
}


/* =========================
   2. RICH TEXT EDITING
   ========================= */

// Option A: Simple contenteditable approach
// Add toolbar buttons that execute document commands

function execCmd(command, value = null) {
  document.execCommand(command, false, value);
}

// Toolbar setup
function setupToolbar() {
  document.getElementById("boldBtn")?.addEventListener("click", () => {
    execCmd("bold");
  });

  document.getElementById("h1Btn")?.addEventListener("click", () => {
    execCmd("formatBlock", "H1");
  });

  document.getElementById("h2Btn")?.addEventListener("click", () => {
    execCmd("formatBlock", "H2");
  });

  document.getElementById("italicBtn")?.addEventListener("click", () => {
    execCmd("italic");
  });

  document.getElementById("underlineBtn")?.addEventListener("click", () => {
    execCmd("underline");
  });
}

/* =========================
   3. EXAMPLE TOOLBAR HTML
   ========================= */

/*
<div id="toolbar">
  <button id="boldBtn"><b>B</b></button>
  <button id="italicBtn"><i>I</i></button>
  <button id="underlineBtn"><u>U</u></button>
  <button id="h1Btn">H1</button>
  <button id="h2Btn">H2</button>
</div>

<div class="editor" contenteditable="true"></div>
*/

/* =========================
   4. BASIC STYLES (optional)
   ========================= */

/*
.delete-page-btn {
  margin-top: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
}

#toolbar button {
  margin-right: 5px;
  padding: 6px;
  cursor: pointer;
}

.editor {
  min-height: 200px;
  border: 1px solid #ccc;
  padding: 10px;
}
*/

/* =========================
   5. INIT
   ========================= */

window.addEventListener("DOMContentLoaded", () => {
  attachDeleteButtons();
  setupToolbar();

  createDeleteButton
window.addEventListener("DOMContentLoaded", () => {
  attachDeleteButtons();
  setupToolbar();
});
