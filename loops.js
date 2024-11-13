//* =================================
//*              FOR LOOP
//* =================================

console.log(" *** LOOPS IN ARRAYS *** ");

//?-------------ÖRNEK------------
//? grades'in ortalamasini hesaplayiniz.
// const grades = [55, 77, 23, 89, 100, 44, 33, 45];

// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//   sum += grades[i];
// //   console.log(sum);
// }

// console.log("AVG:", (sum / grades.length).toFixed(2));

// //?-------------ÖRNEK---------------
// //? grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 ayrı diziye kaydediniz.
// const grades = [55, 77, 23, 89, 100, 44, 33, 45];
// const lessThan50 = [];
// const equalOrBiggerThan50 = [];

// for (let j = 0; j < grades.length; j++) {
//   if (grades[j] < 50) {
//     lessThan50.push(grades[j]);
//   } else {
//     equalOrBiggerThan50.push(grades[j]);
//   }
// }

// console.log(lessThan50);
// console.log(equalOrBiggerThan50);
// console.log(grades);

//? ----------------ORNEK--------------------
//? grades dizisindeki notların 50'den kucuk olanları ve buyuk olanları 2 a diziye kaydediniz. FOR-IN

const grades = [55, 77, 23, 89, 100, 44, 33, 45];
const lessThan50 = [];
const equalOrBiggerThan50 = [];

for (let i in grades) {
  grades[i] < 50
    ? lessThan50.push(grades[i])
    : equalOrBiggerThan50.push(grades[i]);
}

// console.log(lessThan50);
// console.log(equalOrBiggerThan50);
// console.log(grades);

// *------------------------------------------------------
//* SORU: students dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadı" dondurulmelidir.
// *------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"];

const findStudent = (name) => {
  let counter = 0;
  for (let student of students) {
    if (student === name) {
      //* aranan dizinin icindeki elemana esitse
      counter++; //* sayaci bir arttir
    }
  }
  return counter;
};

console.log(findStudent("ahmet"));
console.log(findStudent("ismet"));
console.log(findStudent("Alihan"));
