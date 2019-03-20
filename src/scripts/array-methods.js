console.log("where do hamburgers go to dance?")

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
// const planetEl = document.getElementById("planets");
// planets.innerHTML = "<h1> Planet Name: </h1>";
// planets.forEach(planets => {
//     planetEl.innerHTML += `<p>${planets}</p>`
// planetEl.innerHTML += "<hr/>"
// })
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const planetEl = document.getElementById("planets");

const capPlanets = planets.map(planets => {
    return planets.charAt(0).toUpperCase() + planets.slice(1);

})
console.log(capPlanets)
planets.innerHTML += "<h1> Planet Name: </h1>";
planets.forEach(planets => {
    planetEl.innerHTML += `<p>${planets.charAt(0).toUpperCase()}${planets.slice(1)}</p>`
planetEl.innerHTML += "<hr/>"
})

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/