// Symbol ga oid.
// Bir nechta odatiy xususiyatlarga va bitta Symbol bilan yaratilgan xususiyatga ega bo'lgan
//  ob'ekt yarating. Object.keys va Object.getOwnPropertySymbols metodlaridan
//  foydalanib, ob'ektdagi oddiy xususiyatlar va Symbol bilan yaratilgan
//  xususiyatlarni alohida-alohida oling.
document.getElementById("first--btn").addEventListener("click", function () {
  let myObject = {
    name: "Oyatillo",
    age: 21,
    city: "Fargona",
  };

  let sym = Symbol();
  myObject[sym] = "12345";

  let regularProperties = Object.keys(myObject);

  let symbolProperties = Object.getOwnPropertySymbols(myObject);

  let symbolValue = myObject[symbolProperties[0]];

  document.getElementById("first--ans1").innerHTML =
    "Oddiy xususiyatlar: <br>" + regularProperties.join("<br>");

  document.getElementById("first--ans3").innerHTML =
    "Symbol xususiyat qiymati:<br>" + symbolValue;

  document.getElementById("first--ans2").innerHTML =
    "Symbol xususiyatlari:<br>" +
    symbolProperties
      .map(function (sym) {
        return sym.toString();
      })
      .join("<br>");
});

//  rekursive

//
function sum(arg) {
  if (arg <= 1) {
    return arg;
  }
  return arg + sum(arg - 1);
}

// 1. **Sonlarni yig'indisi:**
//  - Berilgan musbat butun sonni argument sifatida qabul qiladigan rekursiv
// funksiya yozing. Funksiya 1 dan boshlab berilgan songacha bo'lgan barcha
//  sonlarning yig'indisini qaytarsin.

document.getElementById("second--btn").addEventListener("click", function () {
  let secondValue = parseInt(document.getElementById("second--value").value);
  document.getElementById("second--ans").innerHTML = sum(secondValue);
});

//
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

document.getElementById("third--btn").addEventListener("click", function () {
  let thirdValue = parseInt(document.getElementById("third--value").value);

  document.getElementById("third--ans").innerHTML = factorial(thirdValue);
});

//
// 2. **Faktoriyal hisoblash:**
//  - Berilgan musbat butun son uchun rekursiv funksiya yozing. Funksiya
//  ushbu sonning faktoriyalini (n!) hisoblab, qaytarsin. Masalan, 5 uchun natija 5 * 4 * 3 * 2 * 1 bo'lishi kerak.

function fibonaci(n) {
  let series = [0, 1];

  for (let i = 2; i < n; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }

  return series;
}

//
// 3. **Fibonnachi sonini topish:**
// - Berilgan n-chi son uchun Fibonacci ketma-ketligi qiymatini hisoblaydigan
//  rekursiv funksiya yozing. Fibonnachi ketma-ketligi: F(0) = 0, F(1) = 1 va F(n) = F(n-1) + F(n-2).

document.getElementById("four--btn").addEventListener("click", function () {
  let fourValue = parseInt(document.getElementById("four--value").value);

  document.getElementById("four--ans").innerHTML = fibonaci(fourValue);
});

//

//                                        Class ga oid.

// 1. **Class yordamida avtomobil yaratish:**
//  - `Car` nomli class yarating. Bu class avtomobilning modelini, yili va rangi kabi
//  xususiyatlarga ega bo'lsin. Keyin ushbu class asosida avtomobil
//  obyektini yarating va uning xususiyatlarini konsolga chiqaring.

class Car {
  letructor(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
  }
}
//
document.getElementById("five--btn").addEventListener("click", function () {
  let answer = "";
  let cars = new Car("Nissan", "R35", "blue");

  for (let key in cars) {
    answer += `${key}: ${cars[key]}<br>`;

    // shartda konsolga chiqaring deyingani uchun konsolga ham chiqarildi
    console.log(`${key}: ${cars[key]}`);
  }

  document.getElementById("five--ans").innerHTML = answer;
});

//

//

// 2. **Classda metod qo'shish:**
//  - `Rectangle` nomli class yarating. Bu class ikkita xususiyatga ega bo'lsin:
//  uzunlik va kenglik. `Rectangle` classida maydonni hisoblab qaytaruvchi `getArea`
//  nomli metod yozing. Keyin ushbu classdan foydalanib,
// to'rtburchakning maydonini hisoblang.

//

//

class Rectangle {
  letructor(width, length) {
    this.width = width;
    this.length = length;
  }
  getArea() {
    return this.width * this.length;
  }
}

document.getElementById("six--btn").addEventListener("click", function () {
  let sixValueWid = parseInt(document.getElementById("six--len--value").value);
  let sixValueLen = parseInt(document.getElementById("six--wid--value").value);

  let rectanle = new Rectangle(sixValueWid, sixValueLen);

  document.getElementById("six--ans").innerHTML = rectanle.getArea();
});

//

function getcharAt(str, index) {
  if (index >= str.length) {
    return "";
  }
  return str.charAt(index);
}

document.getElementById("seven--btn").addEventListener("click", function () {
  let sevenStrValue = document.getElementById("seven--value").value;
  let sevenValue = parseInt(
    document.getElementById("seven--indeks--value").value
  );

  let result = getcharAt(sevenStrValue, sevenValue);

  document.getElementById("seven--ans").innerHTML = result;
});

//

function getLast(str) {
  return str.charAt(str.length - 1);
}

document.getElementById("eight--btn").addEventListener("click", function () {
  let eightValue = document.getElementById("eight--value").value;

  let result = getLast(eightValue);

  document.getElementById("eight--ans").innerHTML = result;
});

//

// 3. Berilgan stringning har bir belgisini konsolga chiqarish uchun `charAt`
//  yordamida sikl (loop) yozing.

function charOut(str = "salom") {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
    result += "<br>" + str.charAt(i);
  }
  return result;
}

document.getElementById("nine--btn").addEventListener("click", function () {
  let nineValue = document.getElementById("nine--value").value;

  let result = charOut(nineValue);

  document.getElementById("nine--ans").innerHTML = result;
});

//

// ### 2. `charCodeAt`
// 1. Berilgan stringning ixtiyoriy indeksida turgan belgining Unicode qiymatini
// `charCodeAt` yordamida qaytaring.

function charCodeOut(str, index) {
  return index < 0 || index >= str.length
    ? "Xato qiymat kiritildi"
    : str.charCodeAt(index);
}

document.getElementById("ten--btn").addEventListener("click", function () {
  let tenValue = document.getElementById("ten--value").value;
  let tenIndValue = document.getElementById("ten--ind--value").value;

  let result = charCodeOut(tenValue, tenIndValue);
  console.log(result);

  document.getElementById("ten--ans").innerHTML = result;
});

//
// 2. Stringdagi har bir belgi uchun Unicode qiymatini
//  toping va uni yangi massivga saqlang.

function strCharCode(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    console.log(str.charCodeAt(i));
    arr.push(str.charCodeAt(i));
  }
  return arr;
}

document.getElementById("eleven--btn").addEventListener("click", function () {
  let elevenValue = document.getElementById("eleven--value").value;

  let result = [];
  result = strCharCode(elevenValue);

  document.getElementById("eleven--ans").innerHTML = result;
});

//

// 3. Belgilangan indeksdan keyingi
// uchta belgining Unicode qiymatlarini konsolga chiqaruvchi funksiya yozing.

function charCodeInd(str, ind) {
  let result = "";
  for (let i = ind + 1; i <= ind + 3; i++) {
    let charCode = str.charCodeAt(i);
    console.log(charCode);
    result += charCode + "<br>";
  }

  return result;
}

document.getElementById("twelve--btn").addEventListener("click", function () {
  let twelveValue = document.getElementById("twelve--value").value;
  let twelveIndValue = parseInt(
    document.getElementById("twelve--ind--value").value
  );

  let result =
    twelveIndValue < twelveValue.length - 3
      ? charCodeInd(twelveValue, twelveIndValue)
      : "Xato indeks kiritildi";

  document.getElementById("twelve--ans").innerHTML = result;
});

//

// ### 3. `at`
// 1. Berilgan stringning ixtiyoriy indeksida turgan belgini `at` yordamida qaytaring.

function atOut(str, ind) {
  return ind < str.length ? str.at(ind) : "Xato indeks kiritildi";
}

document.getElementById("thirdtn--btn").addEventListener("click", function () {
  let thirdtnValue = document.getElementById("thirdtn--value").value;
  let thirdtnIndValue = parseInt(
    document.getElementById("thirdtn--ind--value").value
  );

  let result = atOut(thirdtnValue, thirdtnIndValue);
  document.getElementById("thirdtn--ans").innerHTML = result;
});

//

//
// 2. `at` yordamida stringning oxirgi belgisi nima ekanligini aniqlang.

function atLastOut(str) {
  return "Kiritilgan satrning oxirgi elementi: <br>" + str.at(str.length - 1);
}

document.getElementById("fourtn--btn").addEventListener("click", function () {
  let fourtnValue = document.getElementById("fourtn--value").value;

  let result = atLastOut(fourtnValue);
  document.getElementById("fourtn--ans").innerHTML = result;
});

//

//
// 3. Manfiy indeks berilgan holda,
// `at` yordamida stringning oxirgi qismidagi belgilardan birini oling.

function atLastEl(str) {
  return str.at(str.length - 1);
}

document.getElementById("fivetn--btn").addEventListener("click", function () {
  let fivetnValue = document.getElementById("fivetn--value").value;
  let result = atLastEl(fivetnValue);
  document.getElementById("fivetn--ans").innerHTML = result;
});

//
// ### 4. `slice`
// 1. `slice` yordamida stringning o'rtasidan bir qismini kesib oling va qaytaring.

function sliceStr(str, ind) {
  let len = Math.ceil(str.length / 2);
  return str.slice(len, (len += ind));
}

document.getElementById("sixtn--btn").addEventListener("click", function () {
  let sixtnValue = document.getElementById("sixtn--value").value;
  let sixtnIndValue = parseInt(
    document.getElementById("sixtn--ind--value").value
  );

  let result = sliceStr(sixtnValue, sixtnIndValue);
  document.getElementById("sixtn--ans").innerHTML = result;
});
//

// 2. Berilgan stringning birinchi 3 belgisini `slice` yordamida kesib oling.

function sliceStartStr(str) {
  return str.slice(0, 3);
}

document.getElementById("seventn--btn").addEventListener("click", function () {
  let seventnValue = document.getElementById("seventn--value").value;
  let result = sliceStartStr(seventnValue);
  document.getElementById("seventn--ans").innerHTML = result;
});

//
// 3. `slice` yordamida stringning oxirgi 5 belgisini qaytaring.

function sliceEndStr(str) {
  return str.slice(str.length - 5);
}

document.getElementById("eighttn--btn").addEventListener("click", function () {
  let eighttnValue = document.getElementById("eighttn--value").value;
  let result =
    eighttnValue.length > 5
      ? sliceEndStr(eighttnValue)
      : "Xato qiymat satr 5 ta belgidan kichik";
  document.getElementById("eighttn--ans").innerHTML = result;
});

//
function substringStr(str, start, end) {
  return str.substring(start, end);
}

document.getElementById("ninetn--btn").addEventListener("click", function () {
  let substringValue = document.getElementById("ninetn--value").value;
  let startIndex = parseInt(
    document.getElementById("ninetn--start--value").value
  );
  let endIndex = parseInt(document.getElementById("ninetn--end--value").value);

  let result = substringStr(substringValue, startIndex, endIndex);
  document.getElementById("ninetn--ans").innerHTML = result;
});

//

// 2. `substring` yordamida stringning dastlabki 4 belgisini qaytaring.
function substringStartStr(str) {
  return str.substring(0, 5);
}

document.getElementById("twenty--btn").addEventListener("click", function () {
  let substringValue = document.getElementById("twenty--value").value;

  let result = substringStartStr(substringValue);
  document.getElementById("twenty--ans").innerHTML = result;
});

//

// 3. `substring` yordamida stringning 5-
// chi belgidan boshlab oxirigacha bo'lgan qismni oling.
function substringEndStr(str) {
  return str.substring(5);
}

document
  .getElementById("twentyone--btn")
  .addEventListener("click", function () {
    let substringValue = document.getElementById("twentyone--value").value;

    let result = substringEndStr(substringValue);
    document.getElementById("twentyone--ans").innerHTML = result;
  });

//

//
function substrStr(str, start, length) {
  return str.substr(start, length);
}

document
  .getElementById("twentytwo--btn")
  .addEventListener("click", function () {
    let twentytwoValue = document.getElementById("twentytwo--value").value;
    let startIndex = parseInt(
      document.getElementById("twentytwo--start").value
    );
    let length = parseInt(document.getElementById("twentytwo--length").value);

    let result = substrStr(twentytwoValue, startIndex, length);
    document.getElementById("twentytwo--ans").innerHTML = result;
  });
//

// 2. Berilgan stringning o'rtasidan boshlab,
// 5 ta belgini `substr` yordamida qaytaring.
function substrMed(str) {
  return str.substr(str.length / 2);
}

document
  .getElementById("twentythree--btn")
  .addEventListener("click", function () {
    let substringValue = document.getElementById("twentythree--value").value;

    let result = substrMed(substringValue);
    document.getElementById("twentythree--ans").innerHTML = result;
  });

//

// 3. Stringning so'nggi 4 belgisini `substr` yordamida oling.

function substrEnd(str) {
  return str.substr(str.length - 4);
}

document
  .getElementById("twentyfour--btn")
  .addEventListener("click", function () {
    let substringValue = document.getElementById("twentyfour--value").value;

    let result = substrEnd(substringValue);
    document.getElementById("twentyfour--ans").innerHTML = result;
  });

//
// ### 7. `trim`, `trimStart`, `trimEnd`
// 1. Foydalanuvchi tomonidan kiritilgan stringning boshidagi va oxiridagi bo'sh joylarni `trim` yordamida olib tashlang.
function trimStr(str) {
  return str.trim();
}

document
  .getElementById("twentyfive--btn")
  .addEventListener("click", function () {
    let stringValue = document.getElementById("twentyfive--value").value;

    let result = trimStr(stringValue);
    document.getElementById("twentyfive--ans").innerHTML = result;
  });

//
// 2. Stringning faqat boshidagi bo'sh joylarni `trimStart` yordamida oling.
function trimStartStr(str) {
  return str.trimStart();
}

document
  .getElementById("twentysix--btn")
  .addEventListener("click", function () {
    let stringValue = document.getElementById("twentysix--value").value;

    let result = trimStartStr(stringValue);
    document.getElementById("twentysix--ans").innerHTML = result;
  });

//

// 3. Stringning faqat oxiridagi bo'sh joylarni `trimEnd` yordamida olib tashlang.
function trimEndStr(str) {
  return str.trimEnd();
}

document
  .getElementById("twentyseven--btn")
  .addEventListener("click", function () {
    let stringValue = document.getElementById("twentyseven--value").value;

    let result = trimEndStr(stringValue);
    document.getElementById("twentyseven--ans").innerHTML = result;
  });

//

//

function padStr(str) {
  return str.padEnd(10, "!");
}

document
  .getElementById("twentyeight--btn")
  .addEventListener("click", function () {
    let stringValue = document.getElementById("twentyeight--value").value;

    let result = padStr(stringValue);
    document.getElementById("twentyeight--ans").innerHTML = result;
  });

//
// 2. Berilgan stringning boshiga `padStart`
// yordamida kerakli belgi qo'shib, umumiy uzunligini 15 ga yetkazing.

function padStartStr(str, add = "!") {
  return str.padStart(15, add);
}

document
  .getElementById("twentynine--btn")
  .addEventListener("click", function () {
    let stringValue = document.getElementById("twentynine--value").value;
    let stringAddValue = document.getElementById(
      "twentynine--add--value"
    ).value;

    let result = padStartStr(stringValue, stringAddValue);
    document.getElementById("twentynine--ans").innerHTML = result;
  });

//
// 3. Telefon raqami formatini (masalan, "12345") `padStart`
//  yordamida to'ldirib, "00012345" holiga keltiring.

function padStartNum(str) {
  return str.padStart(8, 0);
}

document.getElementById("thirty--btn").addEventListener("click", function () {
  let stringValue = document.getElementById("thirty--value").value;

  let result = padStartNum(stringValue);
  document.getElementById("thirty--ans").innerHTML = result;
});

//
// ### 9. `repeat`
// 1. Berilgan stringni 3 marta ketma-ket takrorlab, natijasini qaytaring.

function repeatStr(str) {
  return str.repeat(3);
}

document.getElementById("thone--btn").addEventListener("click", function () {
  let repeatValue = document.getElementById("thone--value").value;

  let result = repeatStr(repeatValue);
  document.getElementById("thone--ans").innerHTML = result;
});

//
// 2. `repeat` yordamida
// stringning har bir belgisini 2 marta takrorlangan yangi string hosil qiling.

function repeatCharStr(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str[i].repeat(2);
  }
  return res;
}

document.getElementById("thone--btn").addEventListener("click", function () {
  let repeatValue = document.getElementById("thone--value").value;

  let result = repeatCharStr(repeatValue);
  document.getElementById("thone--ans").innerHTML = result;
});

//
// 3. Belgilangan stringni
// `repeat` yordamida 5 marta takrorlab, har bir takrorlanishni vergul bilan ajratib qo'ying.
function repeatStrLast(str) {
  return (str + ", ").repeat(5).slice(0, -2);
}

document.getElementById("thtwo--btn").addEventListener("click", function () {
  let repeatValue = document.getElementById("thtwo--value").value;

  let result = repeatStrLast(repeatValue);
  document.getElementById("thtwo--ans").innerHTML = result;
});

//
// ### 10. `replace`
// 1. Berilgan stringdan `replace` yordamida faqat birinchi uchrayotgan belgini boshqasiga almashtiring.
function replaceFirstChar(str, targetChar, replacementChar) {
  return str.replace(targetChar, replacementChar);
}

document.getElementById("twthree--btn").addEventListener("click", function () {
  let inputString = document.getElementById("twthree--value").value;
  let targetChar = document.getElementById("target--char--value").value;
  let replacementChar = document.getElementById(
    "replacement--char--value"
  ).value;

  let result = replaceFirstChar(inputString, targetChar, replacementChar);
  document.getElementById("twthree--ans").innerHTML = result;
});
//

//
// 2. Matnda bir xil so'z birikmalarini `replaceAll` yordamida boshqa so'zga almashtiring.
function replaceAllStr(str, targetPhrase, replacementPhrase) {
  return str.replaceAll(targetPhrase, replacementPhrase);
}

document.getElementById("twfour--btn").addEventListener("click", function () {
  let inputString = document.getElementById("twfour--value").value;
  let targetPhrase = document.getElementById("target--phrase--value").value;
  let replacementPhrase = document.getElementById(
    "replacement--phrase--value"
  ).value;

  let result = replaceAllStr(inputString, targetPhrase, replacementPhrase);
  document.getElementById("twfour--ans").innerHTML = result;
});

//
// 3. Foydalanuvchi kirgizgan stringdagi barcha raqamlarni yulduzcha bilan `replaceAll` yordamida almashtiring.

function replaceDigits(str) {
  return str.replaceAll(/\d/g, "*");
}

document.getElementById("twfive--btn").addEventListener("click", function () {
  let inputString = document.getElementById("twfive--value").value;

  let result = replaceDigits(inputString);
  document.getElementById("twfive--ans").innerHTML = result;
});

//
// ### 12. `split`
// 1. Berilgan stringni vergul orqali bo'linib ketadigan qismlarga
//  ajrating va massiv shaklida qaytaring.

function splitComma(str) {
  return str.split(",");
}

document.getElementById("twsix--btn").addEventListener("click", function () {
  let inputString = document.getElementById("twsix--value").value;

  let result = splitComma(inputString);
  document.getElementById("twsix--ans").innerHTML = JSON.stringify(result);
});

//
// 2. `split` yordamida stringni har bir belgisiga ajratib, massiv hosil qiling.
function splitChar(str) {
  return str.split("");
}

document.getElementById("twseven--btn").addEventListener("click", function () {
  let inputString = document.getElementById("twseven--value").value;

  let result = splitChar(inputString);
  document.getElementById("twseven--ans").innerHTML = JSON.stringify(result);
});

//
// 3. Berilgan stringni bo'sh joylardan ajratib, har bir so'zni alohida massiv elementiga oling.
function splitProbel(str) {
  return str.split(" ");
}

document.getElementById("tweight--btn").addEventListener("click", function () {
  let inputString = document.getElementById("tweight--value").value;

  let result = splitProbel(inputString);
  document.getElementById("tweight--ans").innerHTML = JSON.stringify(result);
});

//
// ### 13. `indexOf`
// 1. Berilgan stringdagi birinchi uchragan belgi yoki so'zning indeksini `indexOf` yordamida toping.

// 2. Stringda ma'lum bir so'z qayerda ekanligini toping. Agar so'z mavjud bo'lmasa, -1 qaytaring.

function findFirstIndex(str, search) {
  return str.indexOf(search);
}

document.getElementById("twnine--btn").addEventListener("click", function () {
  let twnineValue = document.getElementById("twnine--value").value;
  let searchValue = document.getElementById("twnine--search--value").value;

  let result = findFirstIndex(twnineValue, searchValue);
  document.getElementById("twnine--ans").innerHTML =
    result !== -1 ? "Indeks:" + result : -1;
});

//
// 3. Stringdagi qidirilayotgan belgi birinchi marta nechanchi indeksda uchrayotganligini toping.
function findCharIndex(str, char) {
  return str.indexOf(char);
}

document.getElementById("fourty--btn").addEventListener("click", function () {
  let fourtyValue = document.getElementById("fourty--value").value;
  let searchValue = document.getElementById("fourty--search--value").value;

  let result = findCharIndex(fourtyValue, searchValue);
  document.getElementById("fourty--ans").innerHTML =
    result !== -1 ? "Indeks:" + result : "Kiritilgan belgi topilmadi.";
});

//
// ### 14. `lastIndexOf`
// 1. Berilgan stringdagi belgi yoki so'zning oxirgi marta uchragan
//  joyini `lastIndexOf` yordamida toping.
function findLastIndex(str, char) {
  return str.lastIndexOf(char);
}

document.getElementById("ftone--btn").addEventListener("click", function () {
  let ftoneValue = document.getElementById("ftone--value").value;
  let searchValue = document.getElementById("ftone--search--value").value;

  let result = findLastIndex(ftoneValue, searchValue);
  document.getElementById("ftone--ans").innerHTML =
    result !== -1 ? "Indeks:" + result : "Kiritilgan belgi topilmadi.";
});

//
// 2. `lastIndexOf` yordamida stringdagi oxirgi bo'sh joyni toping.
function findLastProbIndex(str) {
  return str.lastIndexOf(" ");
}

document.getElementById("fttwo--btn").addEventListener("click", function () {
  let fttwoValue = document.getElementById("fttwo--value").value;

  let result = findLastProbIndex(fttwoValue);
  document.getElementById("fttwo--ans").innerHTML =
    result !== -1 ? "Indeks:" + result : "Kiritilgan belgi topilmadi.";
});

//
// 3. Stringdagi oxirgi marta uchragan raqamning indeksini toping.
function findLastDigitIndex(str) {
  let digitPattern = /\d/g;

  let index = str.lastIndexOf(str.match(digitPattern)[0]);

  return index;
}

document.getElementById("ftthree--btn").addEventListener("click", function () {
  let ftthreeValue = document.getElementById("ftthree--value").value;

  let result = findLastDigitIndex(ftthreeValue);
  document.getElementById("ftthree--ans").innerHTML =
    result !== -1 ? "Indeks:" + result : "Kiritilgan belgi topilmadi.";
});

//
// 1. Berilgan string ichida ma'lum bir so'z yoki belgi borligini `includes` yordamida tekshiring va natijani qaytaring.
function checkIncludes(str, search) {
  return str.includes(search);
}

document.getElementById("ftfour--btn").addEventListener("click", function () {
  let strValue = document.getElementById("ftfour--value").value;
  let searchValue = document.getElementById("ftfour--search--value").value;

  let result = checkIncludes(strValue, searchValue);
  document.getElementById("ftfour--ans").innerHTML = result ? "Bor!" : "Yo'q!";
});

//
// 2. Foydalanuvchi kiritgan stringda raqamlar bor-yo'qligini tekshirish
function includesDigits(str) {
  let digitPattern = /\d/;
  return digitPattern.test(str);
}

document.getElementById("ftfive--btn").addEventListener("click", function () {
  let inputValue = document.getElementById("ftfive--value").value;
  let result = includesDigits(inputValue);
  document.getElementById("ftfive--ans").innerHTML = result
    ? "Raqamlar mavjud!"
    : "Raqamlar yo'q.";
});

//
// 3. Foydalanuvchi kiritgan stringda kichik yoki katta harflar bor-yo'qligini tekshirish
function includesLetter(str) {
  let letterPattern = /[a-zA-Z]/;
  return letterPattern.test(str);
}

document.getElementById("ftsix--btn").addEventListener("click", function () {
  let inputValue = document.getElementById("ftsix--value").value;
  let result = includesLetter(inputValue);
  document.getElementById("ftsix--ans").innerHTML = result
    ? "Harflar mavjud!"
    : "Harflar mavjud emas";
});

//

//

//

//

//

//

//

//

//

//

//

// console.log("test");

// let user = {
//   name: "abv",
//   age: 33,
//   about: function () {
//     return " test";
//   },
//   getAge: function () {
//     return this.about;
//   },
// };

// let test = user.about();
// let age = user.getAge();
// console.log(age);

// class User {
//  letructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   aboutName() {
//     return this.name;
//   }

//   aboutAge() {
//     console.log("olam");

//     return this.age;
//   }
// }

// let salom = new User("salom", 44);

// console.log(salom.aboutName());

// console.log(salom.aboutAge());

// let id = Symbol();

// let users = {
//   name: "John",
//   age: 33,
//   [id]: "salom",
// };

// for (let key in users) {
//   console.log(key);
// }

// function log(arg) {
//   if (arg == 1) {
//     return 1;
//   }
//   return arg * log(arg - 1);
// }

// console.log(log(5));

// let str = "salom olam hello world";

// console.log(str.charAt(2));
// console.log(str.at(2));
// console.log(str[2]);

// console.log(str.charCodeAt(1)); //ASCII code

// let salom = str.slice(0, 5);

// let testStr = "salom";
// let pad = testStr.padStart(10, " salom olam salom olam ");
// console.log(pad);

// let i = 10;
// let reverse = setInterval(() => {
//   if (i == 0) {
//     clearInterval(reverse);
//   }
//   console.log(i);
//   i--;
// }, 1000);
