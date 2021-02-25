import react, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navigation from "./Navigation"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import { useStateValue } from "./StateProvider"
import { auth } from "./firebase"
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      unsubscribe();
    }
  }, []);
  console.log("user is", user)
  return (
    <>
      < Router>

        <div className="app">
          <Switch>
            <Route exact path="/"  >
              <Navigation />
              <Home />
            </Route>

            <Route path="/checkout">
              <Navigation />
              <Checkout />
            </Route>

            <Route path="/login">
              <Login />
            </Route>


          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
