import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
//  Link
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import GlobalStyle from './styles/global-style';

function App() {
  return (
    <Router>
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
    </Router>
  );
}
  
export default App;
  