import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Day from './Day';
import Time from './Time';
import { withStyles, WithStyles, Theme } from '@material-ui/core/styles';

const styles: any = (theme: Theme) => ({
  root: { flexGrow: 1, height: '100vh' },
  paper: {
    height: '95vh',
    width: '90vw',
    textAlign: 'center',
    overflow: 'hidden'
  },
  calendar: {
    height: '100%',
    '& div:last-child': {
      borderRight: '0px'
    }
  }
});

interface calendarProps extends WithStyles<typeof styles> {}

interface calendarState {
  startTime: Date;
  timeSinceStart: number;
  events: any;
}

class Calendar extends React.Component<calendarProps, calendarState> {
  constructor(props: calendarProps) {
    super(props);
    this.state = {
      startTime: new Date(),
      timeSinceStart: 0,
      events: {}
    };
  }
  componentDidMount() {
    this.setState({ startTime: new Date() });
    fetch('https://www.mocky.io/v2/5c9cdca03300004d003f2151')
      .then(response => {
        return response.json();
      })
      .then(events => {
        this.setState({ events });
      });
  }

  public render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Time />
        <Paper className={classes.paper}>
          <Grid
            container
            item
            justify="space-evenly"
            className={classes.calendar}
            id="calendar"
          >
            <Day
              xs={4}
              date={new Date('2019-02-26')}
              events={this.state.events}
            />
            <Day
              xs={4}
              date={new Date('2019-02-27')}
              events={this.state.events}
            />
            <Day
              xs={4}
              date={new Date('2019-02-28')}
              events={this.state.events}
            />
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Calendar);
