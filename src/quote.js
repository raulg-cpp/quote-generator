/* 	Component to generate quotes 
	Reference: https://dev.to/codemediaweb/random-quote-generator-using-javascript-and-api-20ce
*/
/* 	References:
	https://www.slingacademy.com/article/how-to-generate-random-color-in-javascript/
*/


export default function QuoteButton() {	
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
	};
	
	const randomRgbColor = () => {
  		let r = Math.floor(Math.random() * 256); // Random between 0-255
  		let g = Math.floor(Math.random() * 256); // Random between 0-255
  		let b = Math.floor(Math.random() * 256); // Random between 0-255
  		return 'rgb(' + r + ',' + g + ',' + b + ')';
	};
	
	const updateStyle = () => {
		let main_box = document.getElementById("main_box");	
		let quote = document.getElementById("quote");
		
		let color = randomRgbColor();
		main_box.style.backgroundColor = color;
		quote.style.color = color;
	};
 
 
 	const handleClick = () => {	
 		updateContent();
 		updateStyle();
 	};
 
	// JSX
	return (	
		<div>			
			<button className="btn btn-secondary" onClick={handleClick}>Get Quote</button>
		</div>
	);
}
