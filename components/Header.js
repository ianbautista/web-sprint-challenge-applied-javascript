// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
	// creating the DOM elements
	const header = document.createElement("div");
	const date = document.createElement("span");
	const headerTitle = document.createElement("h1");
	const temp = document.createElement("span");

	// adding classes
	header.classList.add("header");
	date.classList.add("date");
	temp.classList.add("temp");

	//supplying the content
	date.textContent = "MARCH 28, 2020";
	headerTitle.textContent = "Lambda Times";
	temp.textContent = "98°";

	// building structure / appending
	header.appendChild(date);
	header.appendChild(headerTitle);
	header.appendChild(temp);

	//accessing the div.header-container
	const headerContainer = document.querySelector("div.header-container");
	//appending header to the DOM
	headerContainer.appendChild(header);
}
