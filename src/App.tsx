import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
//  Link
} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Grid from '@material-ui/core/Grid';
import Chat from './components/Chat';
import Header from './components/Header';
import Loading from './components/Loading';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import GlobalStyle from './styles/global-style';

function App() {
  const [user, loading] = useAuthState(auth);
  const [minLoading, setMinLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading || minLoading ?
        <>
          <Loading />
          <GlobalStyle />
        </>
      : !user ? (
        <>
          <Login />
          <GlobalStyle />
        </>
      ): (
        <>
          <GlobalStyle />
          <Header />
          <Grid
            container
            className={'appGrid'}
            wrap="nowrap"
          >
            <Grid item xs={3}>
              <Sidebar />
            </Grid>
            <Grid item xs={9}>
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </>
      )}
    </Router>
  );
}
  
export default App;
  