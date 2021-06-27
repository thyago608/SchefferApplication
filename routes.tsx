import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./src/pages/Home";
import { SelectTeam } from "./src/pages/SelectTeam";
import { Preventive } from "./src/pages/Preventive";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/selectTeam" exact component={SelectTeam} />`
        <Route path="/selectTeam/:team" component={Preventive} />
      </Switch>
    </BrowserRouter>
  );
}
