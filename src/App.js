import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/contact-us" exact component={ContactUs} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
