/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let dailyCost = 40 * days;

  if (days >= 3 && days <= 6) {
    dailyCost = dailyCost - 20;
  }

  if (days >= 7) {
    dailyCost = dailyCost - 50;
  }

  return dailyCost;
}

module.exports = calculateRentalCost;
