// question 1
// const table = document.getElementById("table");

// let temp = [55, 62, 68, 74, 59, 45, 41, 58, 60, 67, 65, 78, 82, 88, 91, 92, 90, 93, 87, 80, 78, 79, 72, 68, 61, 59, 55, 65]

// for (let i = 0; i < temp.length; i++){
//     if (temp[i] > 85) {
//         table.innerHTML +=
//             `<tr>
//                 <td>${temp[i]}</td>
//                 <td>Hot</td>
//             </tr>`
//     } else if (temp[i] < 60) {
//         table.innerHTML +=
//             `<tr>
//                 <td>${temp[i]}</td>
//                 <td>Cold</td>
//             </tr>`;
//     } else {
//         table.innerHTML +=
//             `<tr>
//                 <td>${temp[i]}</td>
//                 <td>Pleasant</td>
//             </tr>`;
//     }
// }

// // question 2
// const tickets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// let first = 1;
// let second = 6;

// const book = document.getElementById("book");
// book.addEventListener("click", () => {
//   if (first <= 5 || second <= 10) {
//     const seat = prompt("enter the seat class (1 -> 1 to 5, 2 -> 6-10)");

//     if (seat == 1) {
//       if (first <= 5) {
//           const temp = "seat" + first;
//           tickets[first] = 1;
//         first++;
//         document.getElementsByClassName(temp)[0].style.backgroundColor = "green";
//       } else {
//         const temp = prompt(
//           "first class is full! do you want a seat in the second class?"
//         ).toLowerCase();
//         if (temp === 'yes') {
//           const temp = "seat" + second;
//           second++;
//           document.getElementsByClassName(temp)[0].style.backgroundColor = "green";
//         }
//       }
//     } else {
//       const temp = "seat" + second;
//       second++;
//       document.getElementsByClassName(temp)[0].style.backgroundColor = "green";
//     }
//   }
// });


// question 3
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    const weight = document.getElementById("weight").value;
    const feet = document.getElementById("feet").value;
    const inches = document.getElementById("inches").value;
    const gender = document.getElementById("gender").value;

    const bmi = 703 * (weight / Math.pow(feet || inches, 2))

    document.getElementById("result").textContent = bmi;

    if (bmi < 17.5) {
      alert("Anorexia");
    } else {
      if (gender == "Male") {
        if (bmi > 17.501 && bmi < 20.7) {
          alert("Underweight");
        } else if (20.71 < bmi && bmi < 26.4) {
          alert("Ideal Range");
        } else if (26.41 > bmi && 26.4 < bmi) {
          alert("Marginally Overweight");
        } else if (bmi > 27.81 && bmi < 31.1) {
          alert("Overweight");
        } else {
          alert("Very Overweight or Obese range");
        }
      } else if (gender == "Female") {
        if (bmi > 17.501 && bmi < 19.1) {
          alert("Underweight");
        } else if (19.11 < bmi && bmi < 25.8) {
          alert("Ideal Range");
        } else if (25.81 > bmi && 27.3 < bmi) {
          alert("Marginally Overweight");
        } else if (bmi > 27.31 && bmi < 32.3) {
          alert("Overweight");
        } else {
          alert("Very Overweight or Obese range");
        }
      }
    }
})