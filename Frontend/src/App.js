import { BrowserRouter, Route, Switch } from "react-router-dom";
import CampaignPage from "./Components/CampaignPage/CampaignPage";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/campaign/:id" exact component={CampaignPage} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
