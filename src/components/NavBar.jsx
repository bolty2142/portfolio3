import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';



export const Nav = (props) => {
  const {
    classes,
  } = props;
  return (
    <div className={ classes.root } >
      <AppBar className={ classes.flex } position="static">
        
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({

});

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    display: 'flex',
    padding: '20px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.light,
  },
  primaryText: {
    
  },
});

const NavBar = withStyles(styles)(Nav);

export default connect(mapStateToProps, {
  
})(NavBar);

Nav.defaultProps = {
  classes: {
    flex: '',
    primaryText: '',
    root: '',
  },
  name: 'foo',
  logout: () => null,
};

Nav.propTypes = {
  classes: PropTypes.shape({
    flex: PropTypes.string.isRequired,
    primaryText: PropTypes.string,
    root: PropTypes.string.isRequired,
  }),
  name: PropTypes.string,
  logout: PropTypes.func,
};

