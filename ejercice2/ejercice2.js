let array = [];
let numMax = document.querySelector(".numero_mayor");
let numMin = document.querySelector(".numero_menor");
let form = document.getElementById("form");
let Submit = function () {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  let num3 = document.getElementById("number3").value;
  let num4 = document.getElementById("number4").value;

  if (num1 === num2 || num1 === num3 || num1 === num4) {
    alert("el numero  está repetido");
  } else if (num2 === num3 || num2 === num4) {
    alert("el numero está repetido");
  } else if (num3 === num4) {
    alert("el numero está repetido");
  }

  if (num1 !== "" && num2 !== "" && num3 !== "" && num4 !== "") {
    parseInt(array.push(num1, num2, num3, num4));
    function sortByDate(array) {
      for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length - i; j++) {
          if (array[j] > array[j + 1]) {
            k = array[j + 1];
            array[j + 1] = array[j];
            array[j] = k;
          }
        }
      }
      return array;
    }
  }
  console.log(array);

  sortByDate(array);
  if (array.length > 0) {
    numMax.innerHTML = `<li class="mayor">el numero mayor  es:  ${array[3]}</li>`;
    numMin.innerHTML = `<li class="menor">el numero menor  es:  ${array[0]}</li>`;
    array = []
  }
  
  form.reset();
};
