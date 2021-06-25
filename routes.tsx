import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./src/pages/Home";
import { SelectTeam } from "./src/pages/SelectTeam";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/selectTeam" component={SelectTeam} />
      </Switch>
    </BrowserRouter>
  );
}
