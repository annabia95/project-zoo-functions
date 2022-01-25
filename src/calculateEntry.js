const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const rangeAge = {
    child: entrants.filter((entrant) => (entrant.age < 18)).length,
    adult: entrants.filter((entrant) => (entrant.age >= 18 && entrant.age < 50)).length,
    senior: entrants.filter((entrant) => (entrant.age >= 50)).length,
  };
  return rangeAge;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const price = [20.99, 49.99, 24.99];
  const object = countEntrants(entrants);
  const totalPrice = object.child * price[0] + object.adult * price[1] + object.senior * price[2];
  return totalPrice;
  // seu código aqui
}

const entrants = [
  { age: 5 },
  { age: 5 },
  { age: 5 },
  { age: 18 },
  { age: 18 },
  { age: 50 },
];

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
