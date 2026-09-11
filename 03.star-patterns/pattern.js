let n = 4;

for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n; j++) {
    str += "* ";
  }
  console.log(str);
}
console.log("-------------------");

let k = 4;

for (let i = 0; i < k; i++) {
  let str = "";
  for (j = 0; j < i + 1; j++) {
    str += "* ";
  }
  console.log(str);
}
console.log("-------------------");

let l = 5;

for (let i = 0; i < l; i++) {
  let str = "";
  for (j = 0; j <= i; j++) {
    str += j + 1;
  }
  console.log(str);
}
console.log("-------------------");

let m = 5;

for (let i = 0; i < m; i++) {
  let str = "";
  for (j = 0; j <= i; j++) {
    str += i + 1;
  }
  console.log(str);
}
console.log("-------------------");

let o = 5;

for (let i = 0; i < o; i++) {
  let str = "";
  for (j = 0; j < o - i; j++) {
    str += j + 1;
  }
  console.log(str);
}
console.log("-------------------");

let p = 5;

for (let i = 0; i < p; i++) {
  let str = "";
  for (j = 0; j < p - i; j++) {
    str += "*";
  }
  console.log(str);
}
console.log("-------------------");

let q = 5;

for (let i = 0; i < q; i++) {
  // Adding spaces
  let spaces = "";
  for (let j = 0; j < q - (i + 1); j++) {
    spaces += " ";
  }

  // Adding stars
  let stars = "";
  for (let k = 0; k < i + 1; k++) {
    stars += "*";
  }
  console.log(spaces + stars);
}
console.log("-------------------");

let r = 5;
for (let i = 0; i < r; i++) {
  let str = "";
  for (let j = 0; j < i + 1; j++) {
    if (j % 2 == 0) {
      str += "1";
    } else {
      str += "0";
    }
  }

  console.log(str);
}
console.log("-------------------");
let s = 5;
for (let i = 0; i < s; i++) {
  let row = "";
  let toggle = 1;
  for (j = 0; j < i + 1; j++) {
    row += toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}

console.log("-------------------");
let t = 5;
let toggle = 1;
// Here toggle is not refreshing for each row
// toggle is switching between 1 and 0 and the next row starts witgout refreshing
for (let i = 0; i < t; i++) {
  // i is responsible for row count
  let row = "";

  for (j = 0; j < i + 1; j++) {
    // j is responsible for column count
    row += toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
