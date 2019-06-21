import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Day from "./Day";
import { withStyles, WithStyles, Theme } from "@material-ui/core/styles";
import { addDays, isEqual } from "date-fns";

const styles: any = (theme: Theme) => ({
  root: { flexGrow: 1, height: "100vh" },
  paper: {
    height: "90vh",
    width: "90vw",
    textAlign: "center",
    padding: "4px 8px 0 8px",
    marginTop: "8px"
  },
  calendar: {
    height: "100%",
    "& div:last-child": {
      borderRight: "0px"
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
    fetch("http://www.mocky.io/v2/5c9cdca03300004d003f2151")
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
      <Grid container justify="center" className={classes.root}>
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
              date={new Date("2019-02-26")}
              events={this.state.events}
            />
            <Day
              xs={4}
              date={new Date("2019-02-27")}
              events={this.state.events}
            />
            <Day
              xs={4}
              date={new Date("2019-02-28")}
              events={this.state.events}
            />
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Calendar);
