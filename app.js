// o'zgaruvchilar
const formEl = document.querySelector("#form");
const ulEl = document.querySelector("#ul");
const errorMesg = document.querySelector("#error-message");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!formEl.input.value.trim()) {
    errorMesg.textContent = "Iltimos nimadr yozing :(";
  } else {
    const li = document.createElement("li");
    const spanRound = document.createElement("span");
    const icon = document.createElement("i");
    const paragrfText = document.createElement("p");
    icon.setAttribute("class", "icon-check fa-solid fa-check");
    spanRound.classList.add("spancha");
    li.classList.add("li-style");
    paragrfText.textContent = formEl.input.value;
    //   spanRound.appendChild(icon);
    li.appendChild(spanRound);
    li.appendChild(paragrfText);
    ulEl.appendChild(li);
    errorMesg.textContent = "";

    formEl.input.value = "";

    li.addEventListener("dblclick", (e) => {
      li.classList.toggle("complated");
      if (li.classList.contains("complated")) {
        icon.setAttribute("class", "icon-check fa-solid fa-check");
        spanRound.appendChild(icon);
        spanRound.classList.add("linear-gradient");
      } else {
        spanRound.classList.remove("linear-gradient");
      }
    });
  }
});
