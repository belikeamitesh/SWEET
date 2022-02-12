import './App.css';
import Doctor from "./pages/Doctor/Doctor";
import Landing from './pages/Landing/Landing';
import Aboutus from "./pages/Aboutus/Aboutus";
import Social from "./pages/Social/Social";
import Medical from "./pages/Medical/Medical";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/medical" component={Medical} />
      <Route exact path="/aboutus" component={Aboutus} />
      <Route exact path="/doctor" component={Doctor} />
      <Route exact path="/social" component={Social} />
    </Router>
  );
}

export default App;