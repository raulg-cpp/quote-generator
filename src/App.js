// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
	// global
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// tooltip
import { Tooltip } from 'react-tooltip'

// default
//import logo from './logo.svg';
import './App.css';

import QuoteButton from './quote.js';

function App() {
	return (
		<div id="main_box" className="App d-flex justify-content-center align-items-center">
			<div className="w-50 bg-light p-3 rounded shadow-lg">
				{/* Text */} 
				<div className="m-3">
					<h4 className="Quote fade-in-text" id="quote">Click the button to get a quote</h4>
					<p className="text-end text-secondary" id="author">Author</p>
				</div>
				{/* Buttons */}
				<div className="m-3 d-flex justify-content-between">
					<div className="">
						{/* links */}
						<a  data-tooltip-id="twitter_button"
  							data-tooltip-content="Tweet this quote!"
  							data-tooltip-place="bottom"
						   	id="twitter_button" className="btn btn-primary" href=""
						>
							<FontAwesomeIcon icon="fa-brands fa-twitter" />
						</a>
						
						<a data-tooltip-id="tumblr_button"
  						   data-tooltip-content="Post this quote on Tumblr!"
  						   data-tooltip-place="bottom"
						   id="tumblr_button" className="mx-2 btn btn-primary" href=""
						>
							<FontAwesomeIcon icon="fa-brands fa-tumblr" />
						</a>
						
						{/* Tooltips */}
						<Tooltip id="twitter_button" />
						<Tooltip id="tumblr_button" />
					</div>
							
					<QuoteButton />
				</div>
			</div>
		</div>
	);
}

export default App;
library.add(fab, fas, far)
