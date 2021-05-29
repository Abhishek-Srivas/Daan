import { BrowserRouter, Route, Switch } from "react-router-dom";
import CampaignPage from "./Components/CampaignPage/CampaignPage";
import LandingPage from "./Components/LandingPage/LandingPage";
import Organization from './Components/Organiztion-Side/Organization/Organization'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/campaign/:id" exact component={CampaignPage} />
        <Route path="/" exact component={LandingPage} />
        <Route exact path="/organization/:id" component={Organization} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
