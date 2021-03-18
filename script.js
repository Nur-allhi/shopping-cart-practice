document.getElementById("case-increase").addEventListener("click", function () {
  handleProductChange(true);
});

document.getElementById("case-decrease").addEventListener("click", function () {
  handleProductChange(false);
});

function handleProductChange(isIncrease) {
  const caseInput = document.getElementById("case-count");
  const caseCount = parseInt(caseInput.value);
  let caseNewCount = caseCount;
  if (isIncrease == true) {
    caseNewCount = caseCount + 1;
  }
  if (isIncrease == false && caseCount > 0) {
    caseNewCount = caseCount - 1;
  }
  caseInput.value = caseNewCount;
  const caseTotal = caseNewCount * 60;
  document.getElementById("case-total").innerText = "$" + caseTotal;
}

// document.getElementById("case-increase").addEventListener("click", function () {
//   const caseInput = document.getElementById("case-count");
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount + 1;
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * 60;
//   document.getElementById("case-total").innerText = "$" + caseTotal;
// });

// document.getElementById("case-decrease").addEventListener("click", function () {
//   const caseInput = document.getElementById("case-count");
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount - 1;
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * 60;
//   document.getElementById("case-total").innerText = "$" + caseTotal;
// });
