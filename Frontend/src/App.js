import './App.css';
import Doctor from './pages/Doctor/Doctor';
import Landing from './pages/Landing/Landing';
import AboutUs from './pages/About-us/About-us';
import Social from './pages/Social/Social';
import Medical from './pages/Medical/Medical';
import Shop from './pages/Shop/Shops';
import Store from './pages/MedicalStore/Store';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Route exact path="/" component={Landing} />
            <Route exact path="/medical" component={Medical} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/doctor" component={Doctor} />
            <Route exact path="/social" component={Social} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/store" component={Store} />
        </Router>
    );
}

export default App;
