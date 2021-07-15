// const value = document.querySelector(".value");
// console.log(value);

// const butt = document.querySelector("button");
// console.log(butt);

// const div = document.querySelector(".stats div");
// console.log(div);

// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// // Get a list of all `<h3>` elements
// const heading3List = document.querySelectorAll("h3");

// // Iterate over the list and print each one
// for (let element of heading3List.values()) {
//   console.log(element);
// }

// for (let i = 0; i < heading3List.length; i++) {
//     const element = heading3List[i];
//     console.log(element);
//   }

// const divRatingsList = document.querySelectorAll('div .rating-display')

// for (let divs of divRatingsList.values()) {
//     console.log(divs)
// }

// const divAreasList = document.querySelectorAll('div .area-display')

// for (let i = 0; i < divAreasList.length; i++) {
//     console.log(divAreasList[i]);
// }
const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
  let content = desc.innerText;
  content = content.slice(0, 250);
  content += '<a href="#">...</a>';
  desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
  console.log(ratingValue);
}

//   for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);

//     if (ratingValue > 4.7) {
//       rating.style.fontWeight = "bold";
//       rating.style.color = "#3ba17c";
//     }
//   }

for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);