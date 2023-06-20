/* 	Component to generate quotes 
	Reference: 
	https://dev.to/codemediaweb/random-quote-generator-using-javascript-and-api-20ce
	https://www.slingacademy.com/article/how-to-generate-random-color-in-javascript/
*/

import { useEffect } from 'react';

export default function QuoteButton() {
	//==== Initialize ===
	
	/* Load on startup */
    // eslint-disable-next-line
    useEffect( () => { handleClick() } ); 

	//==== functions ====
	const updateLinks = (quote) => {
		let format_quote = encodeURIComponent(quote);
	
		let twitter = document.getElementById('twitter_button');
		//let tumblr = document.getElementById('tumblr_button');

		twitter.href = encodeURI('https://twitter.com/intent/tweet/?text=' + format_quote);
		//tumblr.href = encodeURI('https://www.tumblr.com/widgets/share/tool?canonicalUrl=&caption=');
	};

	const updateContent = () => {	
		let quote = document.getElementById("quote");
		let author = document.getElementById("author");

		// get data and update html
  		const url = "https://api.quotable.io/random";
  		
  		let api = fetch(url);
  		let api_json = api.then( (data) => data.json() );
    	
    	api_json.then( 
    		(item) => {
      			quote.innerText = '"' + item.content + '"';
      			author.innerText = "- " + item.author; 
      		}
    	);
    	
    	// buttons
    	let quote_author = quote.innerText + author.innerText;
    	updateLinks(quote_author);	
	};
	
	const randomRgbColor = () => {
  		let r = Math.floor(Math.random() * 256); // Random between 0-255
  		let g = Math.floor(Math.random() * 256); // Random between 0-255
  		let b = Math.floor(Math.random() * 256); // Random between 0-255
  		return 'rgb(' + r + ',' + g + ',' + b + ')';
	};
	
	const updateColors = () => {
		// Text
		let main_box = document.getElementById("main_box");	
		let quote = document.getElementById("quote");
		let author = document.getElementById("author");
		
		// style
		let color = randomRgbColor();		
		main_box.style.backgroundColor = color;
		quote.style.color = color;
		author.style.color = color;
	};

  	const fadeText = () => {
  		// fade-out 
		let box = document.getElementById("text_box");
		box.style.opacity = 0.0;	
		
		// update after fade-out
		setTimeout( () => {
			updateContent();
			updateColors();
			box.style.opacity = 1.0;
		}, 1000); 							// Fadeout delay in ms
  	}
	 
 	const handleClick = () => {	 	
 		fadeText();
 	};
 
	//==== JSX ====
	return (	
		<div>			
			<button className="btn btn-outline-primary" onClick={handleClick}>Get Quote</button>
		</div>
	);
}
