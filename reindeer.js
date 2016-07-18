var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]; 
var hohohoElement = document.getElementById("reindeer");
var pleaseGod = "";

// Your task is to loop through all the reindeer in the array, and add the
// name of the reindeer to the single HTML <div> element provided. The name of
// the reindeer should be prepended with the corresponding color from the
// other array.

// For example:

// Blue Dasher
// Red Dancer



for ( var i = 0; i < colors.length; i++) {
  for (var j = 0; j < reindeer.length; j++) {
       if (i === j) {
          pleaseGod += '<p>';
          pleaseGod += colors[i] + ' ';
          pleaseGod += reindeer[j];
          pleaseGod += '</p>';
        }
  }
  }
  hohohoElement.innerHTML = pleaseGod;
// hohohoElement.innerHTML = "<div>" + "<p>" + "This is never going to work" + "</p>" + "</div>";// console.log(pleaseGod);

// hohohoElement.innerHTML = "<div>" + "<p>" + "This is never going to work" + "</p>" + "</div>";



// var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];

// var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

// coloredReindeer =[];

// for (var i = 0; i < reindeer.length; i++) {
// coloredReindeer.push(colors[i] + ' ' + reindeer[i]);
// console.log(coloredReindeer[i]);
// document.getElementById("reindeer").innerText=coloredReindeer[i];
// }


//// Someone else's correct example below to learn from ///// 

// var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"],
//     reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"],
//     colorsLength = colors.length;
//  // // reindeerLength for nested loops trial and error
//     reindeerLength = reindeer.length;

// var hohohoElement = document.getElementById("coloredReindeer");
    

// // console.log("DOM Element containing reindeer list", hohohoElement);

// // function for building up my HTML string to apply to the DOM
// var buildHTML = function buildString () {
//   var htmlString = '<ul>';
  
//   for (var i = 0; i < colorsLength; i++) {
//     for (var j = 0; j < reindeerLength; j++) {
//       // if statement to make sure that only valid names and colors will print. 
//       // will only build a string when array indexes match
//       // also prevents inner loop from running a full cycle on every outerloop ++
//       if (i === j) {
//           htmlString += '<li>';
//           htmlString += colors[i] + ' ';
//           htmlString += reindeer[j];
//           htmlString += '</li>';
//         } 
//       }
//     }
//   htmlString += '</ul>';
//   return htmlString;
// };

// // add my htmlString to the DOM
// hohohoElement.innerHTML = buildHTML();



// Scott's way ||

for (var i = 0; i < reindeer.length; i++) {
  hohohoElement.innerHTML += colors[i] + "" + reindeer[i] + "<br>" 
}



//  if you don't know which one is longer // 
for (var i = 0; i < Math.max(colors.length, reindeer.length); i++) {
  hohohoElement.innerHTML += colors[i % colors.length] + "" + reindeer[i & reindeer.length] + "<br>" 
}


