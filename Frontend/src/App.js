import { BrowserRouter, Route, Switch } from "react-router-dom";
import CampaignPage from "./Components/CampaignPage/CampaignPage";
import LandingPage from "./Components/LandingPage/LandingPage";
import Organization from "./Components/Organiztion-Side/Organization/Organization";
import SearchCampaign from "./Components/SearchCampaigns/SearchCampaigns";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/campaign/:id" exact component={CampaignPage} />

        <Route path="/searchcampaign" exact component={SearchCampaign} />
        <Route exact path="/organization/:id" component={Organization} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
