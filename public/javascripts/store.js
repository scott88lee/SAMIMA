var rowNumber = 0
let item = {
  sku: "UPC123123",
  brand: "Yamaha",
  model: "PAC112J",
  qty: 1,
  unit_cost: 200
}

function fake() {
  let invoice = document.getElementById('invoice');
  var row = invoice.insertRow(rowNumber);
  
  row.classList.add('entry');
  console.log(row)

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  
  // Add some text to the new cells:
  cell1.innerHTML = rowNumber + 1;
  cell2.innerHTML = item.sku
  cell3.innerHTML = item.brand
  cell4.innerHTML = item.model
  cell5.innerHTML = "<input class='ui input' type='number' size='4' value='" + item.qty + "'>";
  cell6.innerHTML = "<input type='number' value='" + item.unit_cost + "'>";
  cell7.innerHTML = "NEW CELL2";

  rowNumber++;
  recalculate();
}

function recalculate() {
}