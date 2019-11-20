import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import * as adobe from './assets/adobe.png';
import * as pong from './assets/pong.png';
import * as seek from './assets/seek.png';
import * as tetris from './assets/tetris.png';
import * as vr from './assets/vr.png';
import * as w3 from './assets/w3clone.png';
import * as otl from './assets/otl.png';

const projectList = [
  {id: 8, title: 'VR Portfolio', img: vr, href:'http://vr.alangford.io'},
  {id: 1, title: 'Pong', img: pong, href:'http://pong.alangford.io'},
  {id: 2, title: 'Tetris', img: tetris, href:'http://tetris.alangford.io'},
  {id: 3, title: 'On-The-Line', img: otl, href:'https://github.com/Dream-Team99/On-The-Line-app'},
  {id: 4, title: 'Adobe Clone', img: adobe, href:'http://adobe.alangford.io'},
  {id: 5, title: 'W3Schools Clone', img: w3, href:'http://w3clone.alangford.io'},
  {id: 6, title: 'Seek Adventure App', img: seek, href:'http://seek.alangford.io'},

]

export const Projects = (props) => {

  const {
    classes,
  } = props;
  
  return (
    <Grid container spacing={24} >
        <Grid item xs={12} justify="center" className={ classes.centered }>
          <Typography color="secondary" variant="display1">
              Projects
          </Typography>
        </Grid>
        <GridList className={classes.gridList} cols={1.5}>
        {projectList.map(tile => (
          <GridListTile key={tile.img} className={ classes.tile } onClick={() => window.location = tile.href}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}/>
              </GridListTile>
            ))}
      </GridList> 
    </Grid>
)}

const styles = theme => ({
  tile: {
    minHeight: '50vh'
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    minHeight: '50vh'
  },
  title: {
    color: theme.palette.secondary.light,
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',

}
});
  
  
export default withStyles(styles)(Projects);