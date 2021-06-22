import "./ui/styles/pages/App.css";
import Login from "./ui/pages/Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./ui/pages/Home/Home";

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
