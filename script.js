function goToCourse(course) {
  localStorage.setItem("course", course);
  window.location.href = "course.html";
}

function goBack() {
  window.location.href = "index.html";
}

function goHome() {
  window.location.href = "index.html";
}

function scrollToCourses() {
  const el = document.querySelector(".courses");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

const data = {
  math: ["Algebra HW", "Test Friday"],
  spanish: ["Introduction to Spanish"],
  history: ["Essay on WWII"]
};

// Run ONLY on course page
if (document.getElementById("title")) {
  const course = localStorage.getItem("course");

  document.getElementById("title").innerText = course;

  const list = document.getElementById("list");

  if (data[course]) {
    data[course].forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
  } else {
    list.innerHTML = "<li>No assignments found</li>";
  }
}
