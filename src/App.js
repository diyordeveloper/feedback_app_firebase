import React from "react";
import { getAuth } from "firebase/auth";
import ScrollToTop from "react-scroll-to-top";
import { useAuthState } from "react-firebase-hooks/auth";
import Mentorr from "./components/mentor/Mentorr";
import Comment from "./components/comment/Comment";
import View from "./components/View/View";
import ViewComm from "./components/View/ViewComm";
import Design from "./components/design/Design";
import SignIn from "./components/signIn/SignIn";
import { googleAuth } from "./Firebase/Firebase";
import { Switch, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import Modal from "./Modal";
import Auth from "./Auth";
import Dashboard from './Dashboard'
import { useUserContext } from "./Context";
function App() {
  const { user, loading, error } = useUserContext();

  // const [user] = useAuthState(googleAuth);
  // const [user, setUser] = React.useState(null);
  // React.useEffect(() => {
  //   googleAuth.onAuthStateChanged(user => {
  //     setUser(user)
  //   })
  // }, [])

  return (
    <>
      <ScrollToTop smooth top="20" /> 
      <Switch>
        <Route path="/" exact>
        
         {user ? <Mentorr /> : <Auth />}   
        </Route>
        <Route path="/comment/:id" >
          <Comment />
        </Route>
        <Route path="/view">
          <View />
        </Route>
        <Route path="/mapcomment/:id">
          <ViewComm />
        </Route>
        <Route path="/design">
          <Design />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      
    </>
  );
}

export default App;
