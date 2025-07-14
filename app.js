  const billInput  = document.querySelector('#bill');
  const tipInput   = document.querySelector('#tip');
  const resultEl   = document.querySelector('#result');
  const peopleInput = document.querySelector('#people');
  
function calculateTip() {
  const bill = Number(billInput.value);
  const tip = Number(tipInput.value);
  let people = Number(peopleInput.value);

  if (!bill || !tip) {
    resultEl.textContent = "Enter bill and tip % properly ";
    return;
  }

  // Default to 1 person if not provided or invalid
  if (!people || people < 1) {
    people = 1;
  }

  const tipAmount = (bill * tip) / 100;
  const totalAmount = bill + tipAmount;
  const perPerson = totalAmount / people;

  resultEl.textContent =
    `Tip Amount: ₹${tipAmount.toFixed(2)}\n` +
    `Total Amount: ₹${totalAmount.toFixed(2)}\n` +
    (people > 1
      ? `Each Person Pays: ₹${perPerson.toFixed(2)} `
      : `You Pay: ₹${totalAmount.toFixed(2)} `);
}
