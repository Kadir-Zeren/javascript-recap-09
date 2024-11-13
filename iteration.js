//* ==================================
//*          FOREACH METHOD
//* ==================================
console.log(" ****** ITERATION ****** ");

const prices = [250, 150, 300, 500];

//* KLASIK FOR
for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}
console.log(" ********* ");

//* FOREACH
prices.forEach((p) => console.log(p));

console.log(" ********* ");

prices.forEach((p, i) => console.log("DEGER:", p, "INDIS:", i));
