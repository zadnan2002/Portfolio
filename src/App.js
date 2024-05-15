import "./App.scss";

import ResponsiveAppBar from "./components/Sidebar/Sidebar";
import Home1 from "./Home1";
import Home3 from "./Home3";
import HomeSnow from "./HomeSnow";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Error404 from "./Error404";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  ReactGA.initialize("G-NBFCWVE4LG");
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <Router>
      <div className="App">
        <HomeSnow />
        <Analytics></Analytics>
        <SpeedInsights />
        <ResponsiveAppBar />
        <Switch>
          <Route exact path="/" component={Home1} />
          <Route path="/about" component={Home3} />
          <Route component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
