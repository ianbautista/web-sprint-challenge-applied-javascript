import axios from "axios";
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles

//sending request

/*
{
    "articles": {
        "bootstrap": [
            {
                "authorName": "FIDO WALKSALOT",
                "authorPhoto": "./assets/fido.jpg",
                "headline": "Bootstrap 5: Get a Sneak Peak at all the New Features"
            },
            {
                "authorName": "MAX GOODBOYE",
                "authorPhoto": "./assets/max.jpg",
                "headline": "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)"
            },
            {
                "authorName": "MAX GOODBOYE",
                "authorPhoto": "./assets/max.jpg",
                "headline": "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About"
            }
        ],
        "javascript": [
            {
                "authorName": "SIR RUFF'N'STUFF",
                "authorPhoto": "./assets/sir.jpg",
                "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects"
            },
            {
                "authorName": "BONES R. LIFE",
                "authorPhoto": "./assets/bones.jpg",
                "headline": "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences"
            },
            {
                "authorName": "PUPPER S. DOGGO",
                "authorPhoto": "./assets/puppers.jpg",
                "headline": "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'"
            },
            {
                "authorName": "SIR RUFF'N'STUFF",
                "authorPhoto": "./assets/sir.jpg",
                "headline": "Typescript: Ten Things you Should Know Before Building Your Next Angular Application" 
            }
        ],
        "jquery": [
            {
                "authorName": "PUPPER S. DOGGO",
                "authorPhoto": "./assets/puppers.jpg",
                "headline": "History of Javascript Libraries: from jQuery to React"
            },
            {
                "authorName": "FIDO WALKSALOT",
                "authorPhoto": "./assets/fido.jpg",
                "headline": "jQuery Animations: When and Where to Use Them, and Not CSS"
            },
            {
                "authorName": "FIDO WALKSALOT",
                "authorPhoto": "./assets/fido.jpg",
                "headline": "Why I Use jQuery in Every Application I Create and Why You Should Too"
            }
        ],
        "node": [
            {
                "authorName": "SIR RUFF'N'STUF",
                "authorPhoto": "./assets/sir.jpg",
                "headline": "Node.js in 2018: Which Framework? Express, Sails, Hapi?"
            },
            {
                "authorName": "BONES R. LIFE",
                "authorPhoto": "./assets/bones.jpg",
                "headline": "MongoDB: NoSQL vs. SQL, the Debate Continues.."
            }
        ],
        "technology": [
            {
                "authorName": "MAX GOODBOYE",
                "authorPhoto": "./assets/max.jpg",
                "headline": "AI: What Are the Ethical Ramifications of the Future?"
            },
            {
                "authorName": "MAX GOODBOYE",
                "authorPhoto": "./assets/max.jpg",
                "headline": "AR or VR: How We Will See the World Through a Digital Lense"
            },
            {
                "authorName": "MAX GOODBOYE",
                "authorPhoto": "./assets/max.jpg",
                "headline": "Quantum Computing: Where we Are Now, and Where We Will Be Very Soon"
            }
        ]
    }
}
*/

const articlesData = "https://lambda-times-backend.herokuapp.com/articles";

axios
	.get(articlesData)
	.then((response) => {
		const artData = response.data.articles;
		// console.log(artData);
		// debugger;
		for (let key in artData) {
			artData[key].forEach((item) => {
				cardMaker(item);
				// console.log(item);
			});
		}
	})
	.catch((error) => {
		console.log(error);
	});

// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

//creating function to create cards
function cardMaker(artObj) {
	//creating DOM element
	const card = document.createElement("div");
	const headline = document.createElement("div");
	const author = document.createElement("div");
	const imgContainer = document.createElement("div");
	const img = document.createElement("img");
	const authorName = document.createElement("span");
	// console.log(artObj);
	//adding classes
	card.classList.add("card");
	headline.classList.add("headline");
	imgContainer.classList.add("img-container");
	author.classList.add("author");

	//supply content
	headline.textContent = `${artObj.headline}`;
	img.setAttribute("src", `${artObj.authorPhoto}`);
	authorName.textContent = `By ${artObj.authorName}`;

	//build structure / append
	card.appendChild(headline);
	card.appendChild(author);
	author.appendChild(imgContainer);
	imgContainer.appendChild(img);
	author.appendChild(authorName);

	//accessing .cards-container
	const cardsContainer = document.querySelector(".cards-container");

	//appending card to the DOM
	cardsContainer.appendChild(card);

	//adding eventListener on click
	card.addEventListener("click", () => {
		console.log(artObj.headline);
	});

	return card;
}
