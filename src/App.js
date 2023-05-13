// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
	// global
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// default
//import logo from './logo.svg';
import './App.css';

import QuoteButton from './quote.js';

function App() {
	return (
		<div className="d-flex flex-col justify-content-center align-items-center">
			<div className="w-50 align-items-center">
				{/* Text */} 
				<div className="">
					<p id="quote">Click the button to get a quote</p>
					<h3 className="float-right" id="author">Author</h3>
				</div>
				{/* Buttons */}
				<div className="d-flex justify-content-between">
					<div>
						<a className="btn btn-primary" href="">
							<FontAwesomeIcon icon="fa-brands fa-twitter" />
						</a>
						
						<a className="btn btn-primary" href="">
							<FontAwesomeIcon icon="fa-brands fa-tumblr" />
						</a>
					</div>
					
					<QuoteButton />
				</div>
			</div>
		</div>
	);
}

export default App;
library.add(fab, fas, far)
