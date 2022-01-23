import {React} from 'react';
import HomeVR from './components/homeVR/homeVR.jsx';
import {BrowserRouter as Router, useHistory } from "react-router-dom";

function App() {
    return (
        <div className="appContainer">
        <Router>
            <HomeVR/>
        </Router>
        </div>
    ); 
    
}

export default App;