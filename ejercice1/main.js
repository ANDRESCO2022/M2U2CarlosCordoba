let materias = [];

let form = document.getElementById("form");
let table = document.querySelector(".table");
let valores = document.querySelector(".valores");
let title_table = document.querySelector(".title_table");
let Submit = function () {
  let precio = 0;

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let materia = document.getElementById("materias");
  let id = parseInt(document.getElementById("id").value);
  let selected = materia.options[materia.selectedIndex].text;

  if (selected === "Ingles") {
    precio = 500000;
  } else if (selected == "Matematicas") {
    precio = 350000;
  } else if (selected == "Desarrollo_Web") {
    precio = 600000;
  } else if (selected == "I_A") {
    precio = 800000;
  } else if (selected == "Biologia") {
    precio = 900000;
  } else if (selected == "Quimica") {
    precio = 1000000;
  } else if (selected == "Sociales") {
    precio = 8500000;
  } else {
    precio = 0;
  }

  if (nombre === "" || apellido === "") {
    alert("completa los  campos");
  } else {
    materias.push({ nombre, apellido, id, selected, precio: precio });
  }

  form.reset();
};
const crearTabla = function () {
  th = document.createElement("th");
  th1 = document.createElement("th");
  th2 = document.createElement("th");
  th3 = document.createElement("th");
  th4 = document.createElement("th");
  tx = document.createTextNode("Nombre");
  tx1 = document.createTextNode("Apellido");
  tx2 = document.createTextNode("Identidad");
  tx3 = document.createTextNode("Materia");
  tx4 = document.createTextNode("Precio");
  th.appendChild(tx);
  th1.appendChild(tx1);
  th2.appendChild(tx2);
  th3.appendChild(tx3);
  th4.appendChild(tx4);
  title_table.appendChild(th);
  title_table.appendChild(th1);
  title_table.appendChild(th2);
  title_table.appendChild(th3);
  title_table.appendChild(th4);
};
const searchId = function () {
  let id = parseInt(document.getElementById("id1").value);
  let registros = materias.filter((element) => element.id === id);
  const valorMatriculas = registros
    .map((element) => element.precio)
    .reduce((accum, element) => accum + element, 0);

  registros.map((element) => {
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    td4 = document.createElement("td");
    td = document.createElement("td");
    tdTex = document.createTextNode(`${element.nombre}`);
    tdTexto = document.createTextNode(`${element.apellido}`);
    tdTexto1 = document.createTextNode(`${element.id}`);
    tdTexto2 = document.createTextNode(`${element.selected}`);
    tdText = document.createTextNode(`${element.precio}`);
    td1.appendChild(tdTex);
    td2.appendChild(tdTexto);
    td3.appendChild(tdTexto1);
    td4.appendChild(tdTexto2);
    td.appendChild(tdText);
    table.appendChild(td1);
    table.appendChild(td2);
    table.appendChild(td3);
    table.appendChild(td4);
    table.appendChild(td);
  });
  const descuentoMatricula = valorMatriculas - valorMatriculas * 0.2;
  art = document.createElement("article");
  art1 = document.createElement("article");
  art2 = document.createElement("article");
  art3 = document.createElement("article");

  value1 = document.createTextNode(`costo de papeleria: 20000`);
  value2 = document.createTextNode(`costo de cartet: 8000`);
  value3 = document.createTextNode(
    `descuento 20% de matricula ${valorMatriculas * 0.2}`
  );
  value4 = document.createTextNode(
    `valor total matricula ${descuentoMatricula + 28000}`
  );
  art.appendChild(value1);
  art1.appendChild(value2);
  art2.appendChild(value3);
  art3.appendChild(value4);
  valores.appendChild(art);
  valores.appendChild(art1);
  valores.appendChild(art2);
  valores.appendChild(art3);
};
const Matricular = function () {
  crearTabla();
  searchId();
};
