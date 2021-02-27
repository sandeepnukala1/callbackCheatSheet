const minions = [
  "bob",
  "kevin",
  "stuart",
  "dave",
  "jerry",
  "mark",
  "tim",
  "phil",
  "carl",
];

minions.forEach((m) => {
  console.log(m);
});

const capitalizedMinions = minions.map((m) => {
  if (m !== "kevin") {
    return m.toUpperCase();
  }
  return m;
});

console.log(capitalizedMinions);

const actuallyCapitalizedMinions = capitalizedMinions.filter((m) => {
  return m === m.toUpperCase();
});

console.log(actuallyCapitalizedMinions);

const isEveryMinionCapitalized = actuallyCapitalizedMinions.every((m) => {
  return m === m.toUpperCase();
});

console.log(isEveryMinionCapitalized);

const isCapitalized = (minion) => {
  return minion.split("")[0] === minion.split("")[0].toUpperCase();
};

const isCapital = capitalizedMinions.every(isCapitalized);

console.log(isCapital);

const uncapitalizedMinion = capitalizedMinions.find((m) => {
  return m.split("")[0] !== m.split("")[0].toUpperCase();
});

console.log(uncapitalizedMinion);

const indexOfImposter = capitalizedMinions.findIndex((m) => {
  return m.split("")[0] !== m.split("")[0].toUpperCase();
});

console.log(indexOfImposter);

capitalizedMinions[indexOfImposter] = capitalizedMinions[
  indexOfImposter
].toUpperCase();

const isCap = capitalizedMinions.every(isCapitalized);

console.log(isCap);

const minionNameLengths = capitalizedMinions.map((m) => {
  return m.split("").length;
});

console.log(minionNameLengths);

const sumOfMinions = minionNameLengths.reduce((accumulator, val) => {
  return accumulator + val;
});

console.log(sumOfMinions);

const isGreaterThan = capitalizedMinions.some((m) => {
  return m.split("").length >= 6 || m.split("").length > 7;
});

console.log(isGreaterThan);

capitalizedMinions[indexOfImposter] = capitalizedMinions[
  indexOfImposter
].toLowerCase();

const capA = capitalizedMinions.some(isCapitalized);

console.log(capA);

const compareMinions = (minionA, minionB) => {
  return minionA.split("").length - minionB.split("").length;
};

const sortedArray = capitalizedMinions.sort(compareMinions);

console.log(sortedArray);
