/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let dailyCost = 40 * days;
  const SevenDays = 7;
  const ThreeDays = 3;
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;

  if (days >= SevenDays) {
    return (dailyCost = dailyCost - discountForSevenDays);
  }

  if (days >= ThreeDays) {
    return (dailyCost = dailyCost - discountForThreeDays);
  }

  return dailyCost;
}

module.exports = calculateRentalCost;
