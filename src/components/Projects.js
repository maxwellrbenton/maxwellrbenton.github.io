import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
});

function Projects() {
  const classes = useStyles();
  return(
    <div>
      <h3>Projects</h3>
      <div className="projects">
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
            <a href="https://maxwellrbenton.github.io/react-game-of-life/">Conway's Game of Life in React</a>
            </Typography>
            <a href="https://maxwellrbenton.github.io/react-game-of-life/"><CardMedia
              className={classes.media}
              image="/website/game-of-life.png"
              title="Game of Life"
            /></a>
            <Typography variant="body2" component="p">
              <br />
              A React implementation of <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a>, a cellular automation game. Although the logic for the game is simple, complex, self-sustaining patterns can develop.
              <br />
              <br />
              This version of the game is built using React components as cells and contains functionality to save and load board states locally using IndexDB.
              {'"a benevolent smile"'}
            </Typography>
            <br />
            <a href="https://maxwellrbenton.github.io/react-game-of-life/"><Button size="small">View Project</Button></a>
          </CardContent>
        </Card>
      </div>
    </div>
  )

}

export default Projects;