// var x = 5 + 2 + 3;
// console.log(x);

// for (i = 1; i < 10; i++) {
//   for (j = 1; j < 10; j++) {
//     console.log(i + "*" + j + "=" + i * j);
//   }
//   console.log("----");
// }

let a = "";

for (i = 1; i < 10; i++) {
  for (j = 1; j < 10; j++) {
    a += j + "*" + i + "=" + i * j + "\t";
  }
  a += "\n";
  console.log(a);
}

function changepicture() {
  document.getElementById("picture").src = "./456.jpg";
}

function changepicture2() {
    document.getElementById("picture").src = "./123.jpg";
  }
  