import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./src/pages/Home";
import { SelectTeam } from "./src/pages/SelectTeam";
import { Preventive } from "./src/pages/Preventive";
import { PreventiveSelected } from "./src/pages/PreventiveSelected";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/select-team" exact component={SelectTeam} />`
        <Route path="/select-team/:team" exact component={Preventive} />
        <Route
          path="/select-team/:team/:preventive"
          component={PreventiveSelected}
        />
      </Switch>
    </BrowserRouter>
  );
}
