// O'zgaruvchilar
const formEl = document.querySelector("#form");
const ulEl = document.querySelector("#ul");
const errorMesg = document.querySelector("#error-message");
const number = document.querySelector("#number");
const allFilter = document.querySelector("#all");
const activeFilter = document.querySelector("#active");
const completedFilter = document.querySelector("#completed");
const deleteCompleted = document.querySelector("#delete-completed");
let itemCount = 0;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formEl.input.value.trim()) {
    errorMesg.textContent = "Iltimos nimadr yozing :(";
  } else {
    const li = document.createElement("li");
    const spanRound = document.createElement("span");
    const icon = document.createElement("i");
    const paragrfText = document.createElement("p");

    // Klasslarni qo'shish
    icon.setAttribute("class", "icon-check fa-solid fa-check");
    spanRound.classList.add("spancha");
    li.classList.add("li-style");
    paragrfText.textContent = formEl.input.value;

    // Span ichiga iconni qo'shish
    spanRound.appendChild(icon);

    // Li ichiga span va matn qo'shish
    li.appendChild(spanRound);
    li.appendChild(paragrfText);

    // Ul ichiga li qo'shish
    ulEl.appendChild(li);
    itemCount++;
    number.textContent = itemCount;

    errorMesg.textContent = "";

    // Input qiymatini tozalash
    formEl.input.value = "";

    // Yangi yaratilgan li elementga dblclick hodisasini qo'shish
    li.addEventListener("dblclick", (e) => {
      li.classList.toggle("completed");
      if (li.classList.contains("completed")) {
        icon.setAttribute("class", "icon-check fa-solid fa-check");
        spanRound.appendChild(icon);
        spanRound.classList.add("linear-gradient");
      } else {
        spanRound.classList.remove("linear-gradient");
      }
    });
  }
});

// Filtr
const filterTasks = (filter) => {
  const allTasks = document.querySelectorAll("#ul li");
  allTasks.forEach((task) => {
    switch (filter) {
      case "all":
        task.style.display = "flex";
        break;
      case "active":
        task.style.display = task.classList.contains("completed")
          ? "none"
          : "flex";
        break;
      case "completed":
        task.style.display = task.classList.contains("completed")
          ? "flex"
          : "none";
        break;
    }
  });
};

// Filtr event listenerlari
allFilter.addEventListener("click", () => filterTasks("all"));
activeFilter.addEventListener("click", () => filterTasks("active"));
completedFilter.addEventListener("click", () => filterTasks("completed"));

// Completed vazifalarni o'chirish
deleteCompleted.addEventListener("click", () => {
  const completedTasks = document.querySelectorAll("#ul li.completed");
  console.log(completedTasks);
  completedTasks.forEach((list) => {
    list.remove();
    itemCount--;
  });
  number.textContent = itemCount;
});
