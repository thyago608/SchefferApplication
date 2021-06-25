import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./src/pages/Home";
import { SelectTeam } from "./src/pages/SelectTeam";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="" exact component={Home} />
      <Route path="" component={} />
    </BrowserRouter>
  );
}
