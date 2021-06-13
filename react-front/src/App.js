import "./App.css";
import Login from "./pages/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={ Home }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
