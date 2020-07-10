import axios from "axios";

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics

/*
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Connection: keep-alive
Content-Length: 69
Content-Type: application/json; charset=utf-8
Date: Fri, 10 Jul 2020 15:19:59 GMT
Etag: W/"45-n0x47Puec8ONB8blIbiOrEYY/8k"
Server: Cowboy
Via: 1.1 vegur
X-Powered-By: Express

{
    "topics": [
        "javascript",
        "bootstrap",
        "technology",
        "jquery",
        "node.js"
    ]
}
*/

//sending axios request
const topicsData = "https://lambda-times-backend.herokuapp.com/topics";
axios
	.get(topicsData)
	.then((response) => {
		// debugger;
		response.data.topics.forEach((item) => {
			tabMaker(item);
			console.log(item);
		});
	})
	.catch((error) => {
		console.log(error);
	});

// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

//accessing div.topics element
const topicsDiv = document.querySelector("div.topics");

//creating function to create tabs
function tabMaker(data) {
	const tab = document.createElement("div");
	tab.classList.add("tab");
	tab.textContent = `${data}`;
	topicsDiv.appendChild(tab);
	// console.log(data);
	return tab;
}

// tabMaker(topicsData);

// console.log(topicsData);
