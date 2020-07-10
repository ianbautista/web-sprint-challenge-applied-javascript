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
	//creating DOM elements
	const carouselDiv = document.createElement("div");
	const leftButton = document.createElement("div");
	const mountainsImg = document.createElement("img");
	const computerImg = document.createElement("img");
	const treesImg = document.createElement("img");
	const turntableImg = document.createElement("img");
	const rightButton = document.createElement("div");

	//adding classes
	carouselDiv.classList.add("carousel");
	leftButton.classList.add("left-button");
	rightButton.classList.add("right-button");

	//supply content
	leftButton.textContent = `<`;
	mountainsImg.setAttribute("src", "./assets/carousel/mountains.jpeg");
	computerImg.setAttribute("src", "./assets/carousel/computer.jpeg");
	treesImg.setAttribute("src", "./assets/carousel/trees.jpegg");
	turntableImg.setAttribute("src", "./assets/carousel/turntable.jpeg");
	rightButton.textContent = `>`;

	//build structure / append
	carouselDiv.appendChild(leftButton);
	carouselDiv.appendChild(mountainsImg);
	carouselDiv.appendChild(computerImg);
	carouselDiv.appendChild(treesImg);
	carouselDiv.appendChild(turntableImg);
	carouselDiv.appendChild(rightButton);

	//accessing the DOM
	const carouselContainer = document.querySelector(".carousel-container");

	//appending to the DOM
	carouselContainer.appendChild(carouselDiv);

	//adding event listener to buttons
	leftButton.addEventListener("click", () => {});
	rightButton.addEventListener("click", () => {});

	return carouselDiv;
}

carousel();
