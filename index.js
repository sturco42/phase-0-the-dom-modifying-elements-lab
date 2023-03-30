const main = document.querySelector("body #main");
console.log(main);
main.remove();


const newHeader = document.createElement("h1")
console.log("step 1: ", newHeader)

newHeader.id = "victory"
console.log("step 2: ", newHeader)
newHeader.textContent = "Sam is the champion"
console.log("step 3: ", newHeader)