import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import LandingPage from './components/LandingPage';
import ErrorBoundry from './components/ErrorBoundry';


export class App extends Component {
  constructor(){
    super()
    this.state = {
      open: false
    }
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
  
          <Switch>
            <Route exact path="/" component={ LandingPage } />
            <Route component={ ErrorBoundry } />
          </Switch>
       
    );
  }
}

const styles = theme => ({

});

const mapStateToProps = state => ({ 

});

const AppWithStyle = withStyles(styles)(App);

export default withRouter(connect(mapStateToProps, {

})(AppWithStyle));

