// function qoute() {
//   fetch("https://type.fit/api/quotes")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       console.log(`${data.text}, ${data.author}`);
//     });
// }

function qoute() {
  const p = document.querySelector(".qut");

  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(`${data.content}`);
      console.log(data);
      p.innerText = `${data.content}`
    })
   
}
