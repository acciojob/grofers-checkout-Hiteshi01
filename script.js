const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // select all price elements
  const prices = document.querySelectorAll(".price");
  let total = 0;

  // calculate sum
  prices.forEach(price => {
    total += Number(price.textContent);
  });

  // get table
  const table = document.querySelector("table");

  // prevent duplicate total row
  if (document.getElementById("total-row")) return;

  // create new row
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row";

  // create single cell
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = "Total Price: Rs " + total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

