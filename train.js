// Task A

console.log("Train area");

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

const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return list[5];

    // return new Promise((resolve,reject) => {  5 sekund await qiladi va kyn undan kyngi operationlar bajariladi
    //   setTimeout(() => {
    //     resolve(list[5]);
    //   },5000);
    // });
    // setTimeout(function () { // async ichida setTimeout ishlamaydi Promise function bn ishlatsak buladi.
    //   return list[5];
    // }, 5000);
  }
}
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

async function run() {
  let javob = await maslahatBering(20);
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();
// Task B
