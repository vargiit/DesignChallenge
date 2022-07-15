const result = document.getElementById("inputext");
let calculate = (num) => {
  result.value += num;
  console.log(typeof result.value);
};

let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter the valid result");
  }
};

let ac = () => {
  result.value = "";
};

let del = () => {
  if (result.value.length == 1) {
    result.value = "";
  }
  result.value = result.value.slice(0 - 1);
};
