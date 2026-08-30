console.log("Train area");
console.log("=========Task B=========");
// Task B

/* Shunday function tuzing, u 1ta string parametrga ega bolsin,
hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.*/

function countDigits(str) {
  let counter = 0;
  for (let char of str) {
    if (char >= "0" && char <= "9") {
      counter++;
    }
  }
  console.log(`Bu stringdagi raqamlar soni ${counter} ta`);
}
countDigits("a1b2c3d4e5f6g7");
countDigits("a1b2c3d4e5f6g7f8l9");
countDigits("a1b2c3");

console.log("=========Task A=========");

// Task A

/* Harf sifatida kiritilgan birinchi parametr,
kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
Funktsiya tuzing

Masalan: countLetter("e", "engineer")
'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
3 sonini qaytaradi. */

function countLetter(letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      count++;
    }
  }
  console.log(`${letter} harfi ${count} marta qatnashgan`);
}
countLetter("e", "engineer");
countLetter("n", "engineer");
countLetter("g", "engineer");
countLetter("i", "engineer");
countLetter("r", "engineer");
countLetter("a", "engineer");

// console.log("Jack Ma maslahatlari");

// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];
// ===================Callback functions=================
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(() => {
//       callback(null, list[5]); // avval barcha oddiy console.log() lar chiqadi kyn esa bu chiqadi;
//     }, 5000);
//   }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// console.log("passed here 1");

// ===========Asynchronous functionlarni qo'llash==============

// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];

//     // return new Promise((resolve,reject) => {  5 sekund await qiladi va kyn undan kyngi operationlar bajariladi
//     //   setTimeout(() => {
//     //     resolve(list[5]);
//     //   },5000);
//     // });
//     // setTimeout(function () { // async ichida setTimeout ishlamaydi Promise function bn ishlatsak buladi.
//     //   return list[5];
//     // }, 5000);
//   }
// }
// call via then(). and catch().

// console.log("passed here 0");
// maslahatBering(20)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// function ichida function yozib chalkashib ketmaslik uchun asyn va await dn foydalanmz

// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
