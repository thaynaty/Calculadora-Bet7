const oddsInput = document.getElementById("odds-input");
const stakeInput = document.getElementById("stake-input");
const calculateBtn = document.getElementById("calculate-btn");
const resultText = document.getElementById("result-text");

function calculate() {
  const odds = oddsInput.value.split(",");
  const stake = Number(stakeInput.value);

  const product = odds.reduce((acc, odd) => acc * Number(odd), 1);

  const potentialWinnings = (product * stake).toFixed(2);
  const profit = (potentialWinnings - stake).toFixed(2);

  resultText.innerText = `Potencial ganho: R$ ${potentialWinnings} | Lucro: R$ ${profit}`;
}

calculateBtn.addEventListener("click", calculate);
