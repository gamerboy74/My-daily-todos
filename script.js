const button = document.getElementById("add-button");
const Input = document.getElementById("Input-field");
const tasks = document.getElementById("list");
const currentTime = newDate();


document.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", () => {
    const taskText = Input.value.trim();

    if (taskText === "") return;
    const li = document.createElement("li");
    li.innerHTML = `<span class="text">${taskText}</span><button class="remove">Remove</button>`;
    li.addEventListener("click", (event) => {
      if (event.target.classList.contains("text")) {
        li.classList.toggle("completed");
      }
    });
    li.querySelector(".remove").addEventListener("click", () => {
      tasks.removeChild(li);
    });
    tasks.appendChild(li);
    Input.value = "";
  });
});
