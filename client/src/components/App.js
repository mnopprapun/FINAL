import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar.js";
import Login from "../pages/Login";
import Shop from "../pages/Shop";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
    <Router>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route exact path="/" />
          <Route path="/shop">
           <Shop user={user}/>
            </Route>
        </Switch>
      </main>
      </Router>
    </>
  );
}

export default App;
