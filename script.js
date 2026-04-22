function goToCourse(course) {
  localStorage.setItem("currentCourse", course);
  window.location.href = "course.html";
}

function goBack() {
  window.location.href = "index.html";
}

const courseData = {
  math: ["Algebra Homework", "Geometry Worksheet"],
  spanish: ["Intro", "Read Chapter 1"],
  history: ["Essay on WWII", "Timeline Project"]
};

if (document.getElementById("course-title")) {
  const course = localStorage.getItem("currentCourse");

  document.getElementById("course-title").innerText = course;

  const list = document.getElementById("assignments");

  courseData[course].forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}
