function analyzeDeal() {
  const purchasePrice = document.getElementById("purchasePrice").value;
  const rent = document.getElementById("rent").value;

  const annualRent = rent * 12;
  const roi = ((annualRent / purchasePrice) * 100).toFixed(2);

  document.getElementById("results").innerHTML =
    `Estimated ROI: ${roi}%`;
}
