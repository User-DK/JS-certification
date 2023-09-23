function checkCashRegister(price, cash, cid) {
  // Define the currency units and their values
  const currencyUnits = [
    { name: "PENNY", value: 0.01 },
    { name: "NICKEL", value: 0.05 },
    { name: "DIME", value: 0.1 },
    { name: "QUARTER", value: 0.25 },
    { name: "ONE", value: 1 },
    { name: "FIVE", value: 5 },
    { name: "TEN", value: 10 },
    { name: "TWENTY", value: 20 },
    { name: "ONE HUNDRED", value: 100 }
  ];

  // Calculate the change required
  let changeRequired = cash - price;

  // Calculate the total cash in the drawer
  const totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);

  // Initialize an array to store the change
  let change = [];

  // Iterate through each currency unit in reverse order (from highest to lowest)
  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    const unit = currencyUnits[i];
    const unitName = unit.name;
    const unitValue = unit.value;
    const unitAvailable = cid[i][1];
    
    // Calculate the maximum amount of the current unit to give as change
    const maxToGive = Math.min(unitAvailable, Math.floor(changeRequired / unitValue) * unitValue);
    
    if (maxToGive > 0) {
      change.push([unitName, maxToGive]);
      changeRequired -= maxToGive;
      changeRequired = Math.round(changeRequired * 100) / 100; // Round to avoid precision errors
    }
  }

  // Check if we have exact change and the drawer is closed
  if (changeRequired === 0 && totalCid === cash - price) {
    return { status: "CLOSED", change: cid };
  }

  // Check if we couldn't provide exact change
  if (changeRequired > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Otherwise, return the change
  return { status: "OPEN", change };
}

// Test the function
console.log(
  checkCashRegister(
    3.26,
    100,
    [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ]
  )
);
