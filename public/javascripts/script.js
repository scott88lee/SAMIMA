let focus = true;
window.onkeydown = function () {
  if (focus) {
    document.getElementsByClassName("focus")[0].focus();
    focus = !focus;
  }
};

$("form").form({
  on: "submit",
  keyboardShortcuts: false,
  fields: {
    empty: {
      identifier: "empty",
      rules: [
        {
          type: "empty",
          prompt: "Please enter a value",
        },
      ],
    },
  },
});

$(".ui.dropdown").dropdown();

function searchTable() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const table = document.getElementById("productTable");
  const tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    col1 =
      tr[i].getElementsByTagName("td")[0].textContent ||
      tr[i].getElementsByTagName("td")[0].innerText;
    col2 =
      tr[i].getElementsByTagName("td")[1].textContent ||
      tr[i].getElementsByTagName("td")[1].innerText;
    col3 =
      tr[i].getElementsByTagName("td")[2].textContent ||
      tr[i].getElementsByTagName("td")[2].innerText;
    col4 =
      tr[i].getElementsByTagName("td")[3].textContent ||
      tr[i].getElementsByTagName("td")[3].innerText;

    if (
      col1.toUpperCase().indexOf(filter) > -1 ||
      col2.toUpperCase().indexOf(filter) > -1 ||
      col3.toUpperCase().indexOf(filter) > -1 ||
      col4.toUpperCase().indexOf(filter) > -1
    ) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
