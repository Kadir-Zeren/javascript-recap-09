//* ==================================
//*          FOREACH METHOD
//* ==================================
console.log(" ****** ITERATION ****** ");

//? -------------- ÖRNEK---------------
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

// ?------------- ÖRNEK ----------------
//? Dizideki toplam fiyati hesaplayalim.

let sum = 0;
prices.forEach((price) => (sum += price));
console.log("SUM:", sum);

console.log(" ********* ");
//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(prices.forEach((price) => price * 2));

//* Foreach ile dongu içerisinde herhangi bir item okunabilir, listelenbilir veya yazdirilabilir. Ancak bu degeri dondurmek mümkün değildir.
prices.forEach((price) => console.log(price * 2));

//* =============================
//*          MAP METHOD
//* =============================
//? ------------ ÖRNEK --------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.

let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const upperName = names.map((name) => name.toLocaleUpperCase());
console.log(upperName);
console.log(names);

//! Orjinal dizi yi modifiye etmek için 3. parametre kullanılabilir.
names.map((name, i, arr) => {
  arr[i] = name.toLocaleUpperCase();
});

console.log(names);
//? ----------------- ORNEK -----------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 21.78;
const dolar = 19.8;
const tlPrices = [100, 150, 100, 50, 80];

const dolarPrices = tlPrices.map((tl) => Number((tl / dolar).toFixed(2)));
const euroPrices = tlPrices.map((tl) => Number((tl / euro).toFixed(2)));

console.log(dolarPrices);
console.log(euroPrices);
console.log(tlPrices);

//* ============================
//*           FILTER METHOD
//* ============================
// ?--------------- ORNEK ---------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const biggerThan = salaries.filter((salary) => salary >= 10000);
console.log(biggerThan);
console.log(salaries);

const range = salaries.filter((salary) => salary >= 8000 && salary <= 10000);
console.log(range);

//* ==================================
//*          CHAINING (PIPELINE)
//* ==================================
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

const biggerThan9000 = salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)));

console.log(biggerThan9000);

salaries
  .filter((s) => s < 9000)
  .map((s) => Number((s * 1.1).toFixed(2)))
  .forEach((s) => console.log(s)); //? Consuming
