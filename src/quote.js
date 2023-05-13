/* 	Component to generate quotes 
	Reference: https://dev.to/codemediaweb/random-quote-generator-using-javascript-and-api-20ce
*/

export default function QuoteButton() {	
	const handleClick = () => {	
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
 
	// JSX
	return (	
		<div>			
			<button className="btn btn-secondary" onClick={handleClick}>Get Quote</button>
		</div>
	);
}
