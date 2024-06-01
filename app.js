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
let now = new Date();
let today = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
let year = now.getFullYear();
let hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
let minute = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
let months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

let data = `${today}. ${months[now.getMonth()]}. ${year} ${hour}:${minute}`;
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formEl.input.value.trim()) {
    errorMesg.textContent = "Iltimos nimadr yozing :(";
  } else {
    const li = document.createElement("li");
    const spanRound = document.createElement("span");
    const icon = document.createElement("i");
    const paragrfText = document.createElement("p");
    const deleteIcon = document.createElement("i");
    const nowData = document.createElement("span");

    // Klasslarni qo'shish
    icon.setAttribute("class", "icon-check fa-solid fa-check");
    deleteIcon.setAttribute("class", "delete-icon fa-regular fa-trash-can");
    nowData.setAttribute("class", "data");
    spanRound.classList.add("spancha");
    li.classList.add("li-style");
    nowData.textContent = `${today}. ${
      months[now.getMonth()]
    }. ${year} ${now.getHours()}:${now.getMinutes()}`;

    paragrfText.textContent = formEl.input.value;

    // Span ichiga iconni qo'shish
    spanRound.appendChild(icon);

    // Li ichiga span va matn qo'shish
    li.appendChild(spanRound);
    li.appendChild(paragrfText);
    li.appendChild(deleteIcon);
    li.appendChild(nowData);

    // Ul ichiga li qo'shish
    ulEl.appendChild(li);
    itemCount++;
    number.textContent = itemCount;

    errorMesg.textContent = "";

    formEl.input.value = "";

    li.addEventListener("dblclick", () => {
      li.classList.toggle("completed");

      if (li.classList.contains("completed")) {
        spanRound.appendChild(icon);
        spanRound.classList.add("linear-gradient");
      } else {
        spanRound.classList.remove("linear-gradient");
        spanRound.appendChild(icon).remove(icon);
      }
    });
    deleteIcon.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  }
});

// Filtr
const filterTasks = (filter) => {
  const allTasks = document.querySelectorAll("#ul li");
  console.log(allTasks);
  allTasks.forEach((task) => {
    switch (filter) {
      case "farxod":
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
allFilter.addEventListener("click", () => filterTasks("farxod"));
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
