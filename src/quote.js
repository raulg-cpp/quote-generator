/*
import {useEffect} from 'react';
import {useRef} from 'react';
*/

export default function QuoteGenerator() {	
	const handleClick = () => {	
		let quote = document.getElementById("quote");
		let author = document.getElementById("author");
		
		const url = "https://api.quotable.io/random";
		
		let getQuote = () => {
  		fetch(url)
    		.then((data) => data.json())
    		.then((item) => {
      		quote.innerText = item.content;
      		author.innerText = item.author;
    		});
		};
		
		getQuote();		
	};
 
	// JSX
	return (	
		<div>
			<p id="quote">
    			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
			</p>
			
			<h3 id="author">Lorem, ipsum.</h3>
			
			<button onClick={handleClick} id="btn">Get Quote</button>
		</div>
	);
}
