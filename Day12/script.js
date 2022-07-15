const add = document.querySelector(".addition");
const deletebtn = document.querySelector(".deletion");
const tasktext = document.querySelector("#todoText");
const div = document.querySelector(".containerClass");
let counter = 0;

add.addEventListener("click", (e) => {
  counter++;
  const task = tasktext.value;
  if (!task) {
    alert("Please fill out the task");
  }

  const mainDiv = document.createElement("div");
  mainDiv.classList.add("remove");
  const input = document.createElement("input");
  input.classList.add("spacing");
  input.setAttribute("readonly", "readonly");
  mainDiv.appendChild(input);
  div.appendChild(mainDiv);
  input.value = task;
  const span = document.createElement("span");
  span.classList.add("deletele");
  const inspan = `<i class="fa-solid fa-trash-can"></i>`;
  span.innerHTML = inspan;
  const span2 = document.createElement("span");
  span2.classList.add("edit");
  const inspan2 = `<i class="fa-solid fa-pen-to-square"></i>`;
  span2.innerHTML = inspan2;
  const span3 = document.createElement("span");
  span3.classList.add("edit");
  const inspan3 = `<i class="fa-solid fa-check"></i>`;
  span3.classList.add("correct");
  span3.innerHTML = inspan3;
  console.log(span2);
  mainDiv.append(span3);
  mainDiv.append(span2);
  mainDiv.append(span);

  tasktext.value = "";

  span.addEventListener("click", (e) => div.removeChild(mainDiv));
  span2.addEventListener("click", (e) => {
    input.removeAttribute("readonly");
    input.focus();
  });

  span3.addEventListener("click", (e) => {
    input.setAttribute("readonly", "readonly");
  });
});

deletebtn.addEventListener("click", () => {
  const mainDiv = document.querySelector(".remove");
  div.removeChild(mainDiv);
  counter--;
});
