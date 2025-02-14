// quest 5
// name = prompt("enter your name");
// regno = prompt("enter your reg no");
// document.write(
//   `<span style="font-weight: 500; border:3px solid red; padding: 5px; margin: 10px">${regno}</span>`
// );

// const box = document.getElementById("box");
// box.innerHTML = `<span style="border: 2px solid black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center; color: red; display: inline-block; margin: 10px;"> *${name}* </span>`;


// quest 6
const btn = document.getElementById("btn");
const total = document.getElementById("total");

btn.addEventListener("click", () => {
  const adults = document.getElementById("adults").value;
  const children = document.getElementById("children").value;

  total.textContent =
    (parseInt(adults) || 0) * 10 + (parseInt(children) || 0) * 5;
});
