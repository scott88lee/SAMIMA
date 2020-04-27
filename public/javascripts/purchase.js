const data = {
  rowNumber: 0,
  items: [],
};

let item = {
  sku: "UPC123123123",
  brand: "Yamaha",
  model: "PAC112J",
  qty: 1,
  unit_cost: 200,
};

function newRow(item) {
  let invoice = document.getElementById("invoice");
  let row = invoice.insertRow();

  console.log(row.sku);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);

  // Add some text to the new cells:
  cell1.innerHTML = "<i class='trash icon'></i>";
  cell1.addEventListener("click", function (e) {
    console.log(e.target.closest("tr"));
    e.target.closest("tr").remove();
    recalculate();
  });

  cell2.classList.add('counter');

  cell3.innerHTML = item.sku;
  cell4.innerHTML = item.brand;
  cell5.innerHTML = item.model;
  cell6.innerHTML =
    "<input onchange='recalculate()' width='20' class='qty' type='number' value='" +
    item.qty +
    "'>";
  cell7.innerHTML =
    "<input onchange='recalculate()' class='ucost' type='number' value='" +
    item.unit_cost +
    "'>";

  cell8.classList.add("subtotal");
  cell8.innerHTML = "";

  recalculate();
}


function reveal() {
  var mod = document.getElementById("myModal");
  $("#modal").modal("show");
}

function fake() {
  newRow(item);
}

function recalculate() {
  let qty = document.getElementsByClassName("qty");
  let counter = document.getElementsByClassName("counter");
  let ucost = document.getElementsByClassName("ucost");
  let subtot = document.getElementsByClassName("subtotal");
  let totalCost = 0;

  for (let i = 0; i < qty.length; i++) {
    subtot[i].innerHTML = "$" + qty[i].value * ucost[i].value;
    totalCost += Number(subtot[i].innerHTML.substring(1));
    counter[i].innerHTML = i + 1;
  }

  document.getElementById("total").innerHTML = "$" + totalCost;
}

function submitForm() {
  if (data.rowNumber == 0) {
    alert("No products added");
  } else {
    document.getElementById("purchaseForm").submit();
  }
}
