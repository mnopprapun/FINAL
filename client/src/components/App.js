import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar.js";
import Login from "../pages/Login";
import Shop from "../pages/Shop";
import About from "../pages/About.js";

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
          <Route exact path="/">
            <Login></Login>
            </Route>
          <Route path="/shop" component={Shop}>
            
           <Shop user={user}/>
            </Route>
            <Route path="/about" component={About}>
              <About></About>
            </Route>
        </Switch>
      </main>
      </Router>
    </>
  );
}

export default App;
