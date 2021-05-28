import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActiveCampaignPage from "./Components/ActiveCampaignPage/ActiveCampaignPage";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/campaign/:id" exact component={ActiveCampaignPage} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
