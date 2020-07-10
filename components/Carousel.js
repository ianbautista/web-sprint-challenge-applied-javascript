/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel() {
	//creating reference for images
	const imgArray = [
		"./assets/carousel/mountains.jpeg",
		"./assets/carousel/computer.jpeg",
		"./assets/carousel/trees.jpeg",
		"./assets/carousel/turntable.jpeg",
	];

	//creating current index
	let index = 0;

	//creating DOM elements
	const carouselDiv = document.createElement("div");
	const leftButton = document.createElement("div");
	const img = document.createElement("img");
	const rightButton = document.createElement("div");

	//adding classes
	carouselDiv.classList.add("carousel");
	leftButton.classList.add("left-button");
	rightButton.classList.add("right-button");

	//supply content
	leftButton.textContent = `<`;
	img.setAttribute("src", `${imgArray[0]}`);
	rightButton.textContent = `>`;

	//build structure / append
	carouselDiv.appendChild(leftButton);
	carouselDiv.appendChild(img);
	carouselDiv.appendChild(rightButton);

	//accessing the DOM
	const carouselContainer = document.querySelector(".carousel-container");

	//appending to the DOM
	carouselContainer.appendChild(carouselDiv);

	//adding event listener to buttons
	leftButton.addEventListener("click", () => {
		if (index < imgArray.length) {
			index++;
			img.setAttribute("src", `${imgArray[index]}`);
		}
	});
	rightButton.addEventListener("click", () => {
		if (index > 0) {
			index--;
			img.setAttribute("src", `${imgArray[index]}`);
		}
	});

	// return carouselDiv;
}

carousel();
