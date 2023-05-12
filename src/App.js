// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
	// global
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// Individual imports
/*
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
*/

// default
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer">
          Learn React
        </a>
       
       {/* bootstrap */}
       <button type="button" class="btn btn-primary">Primary</button>        
       
       {/* react */}
       <FontAwesomeIcon icon="fa-brands fa-twitter" />
       
      </header>
    </div>
  );
}

export default App;
library.add(fab, fas, far)

/* // Individual imports
    <FontAwesomeIcon icon={faBell} />
    <FontAwesomeIcon icon={faTwitter} />
*/
