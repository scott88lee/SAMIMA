$('.modal').modal('hide');

let payload = [];

function newRow(arr) {
  let invoice = document.getElementById('invoice');
  var row = invoice.insertRow(payload.length);
  
  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
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

  cell3.innerHTML = arr[1];
  cell4.innerHTML = arr[2]
  cell5.innerHTML = arr[3]
  cell6.innerHTML =
    "<input onchange='recalculate()' name='qty' class='qty' type='number' value='1'>";
  cell7.innerHTML =
    "<input onchange='recalculate()' name='price' class='ucost' type='number' value=''>";
  cell8.classList.add("subtotal");
  cell8.innerHTML = "";

  recalculate();
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

function appendProduct(str){
  let _arr = str.split(",")
  let exist = false;

  newRow(_arr);
  
  for (let i=0; i<payload.length; i++){
    if (payload[i].sku == _arr[1]) {
      payload[i].qty++
      exist == true;
    }
  } 
  if (exist == false) {
    payload.push({
      pid: _arr[0],
      sku: _arr[1],
      brand: _arr[2],
      name: _arr[3],
      qty: 1,
      price: 0
    });
  }
    
  console.log(payload);
  
  $('.modal').modal('hide');
}

function showModal() {
  $('.modal').modal('show');
  $('.modal').modal('hide');
  $('.modal').modal('show');
}

function submitForm() {
  if (data.payload.length == 0) {
    alert("No products added");
  } else {
    document.getElementById("purchaseForm").submit();
  }
}
