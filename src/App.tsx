import Chart from './components/Chart';
import Table from './components/Table';
import { makeStyles, Grid } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles(() => ({
  container: {
    border: '3px solid purple',
  },
  item: {
    padding: '10px',
    border: '1px solid blue',
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className="full">
      <Grid container className={classes.container}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className={classes.item}><Chart /></Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6} className={classes.item}><Table /></Grid>
      </Grid>
    </div>
  );
}

export default App;
