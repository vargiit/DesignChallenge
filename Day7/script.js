const getFactBtn = document.getElementById("get-fact-btn");
const randomFactBtn = document.getElementById("ran-fact-btn");
const fact = document.querySelector(".fact");
const url = "http://numbersapi.com/";
const container = document.getElementsByClassName("container");

let fetchUrl = async (num) => {
  let finalUrl = url + num;
  const resp = await fetch(finalUrl);
  const data = await resp.text();
  // .then((resp) => resp.text())
  // .then((data) => {
  fact.style.display = "block";
  fact.innerHTML = `<h2>${num}</h2>
      <p>${data}</p>`;
  //   container.append(fact);
  // });
};

let getFact = () => {
  let num = document.getElementById("num").value;
  if (num) {
    if (num >= 0 && num <= 300) {
      fetchUrl(num);
    } else {
      fact.style.display = "block";
      fact.innerHTML = `
            <p>Give a number in range1-300 </p>`;
      // container.append(fact);
    }
  } else {
    fact.style.display = "block";
    fact.innerHTML = `
        <p>Cannot be empty </p>`;
  }
};

let randomFact = () => {
  let num = Math.floor(Math.random() * 301);
  fetchUrl(num);
};
randomFactBtn.addEventListener("click", randomFact);
getFactBtn.addEventListener("click", getFact);
window.addEventListener("load", randomFact);
