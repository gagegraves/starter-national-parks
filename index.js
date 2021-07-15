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

  
const divRatingsList = document.querySelectorAll('div .rating-display')

for (let divs of divRatingsList.values()) {
    console.log(divs)
}

const divAreasList = document.querySelectorAll('div .area-display')

for (let i = 0; i < divAreasList.length; i++) {
    console.log(divAreasList[i]);
}