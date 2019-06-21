import React from "react";
import { differenceInSeconds, format, addDays, getHours } from "date-fns";
import Grid, { GridSize } from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hour from "./Hour";
import { withStyles, WithStyles, Theme } from "@material-ui/core/styles";

const styles: any = (theme: Theme) => ({
  item: {
    borderRight: "0.1em solid #ccc"
  },
  day: { height: "calc(100% - 33px)" }
});

interface dayProps extends WithStyles<typeof styles> {
  xs: GridSize;
  date: Date;
  events: Array<{ startDate: string; endDate: string }>;
}

interface dayState {
  matches: Array<number>;
}

class Day extends React.Component<dayProps, dayState> {
  constructor(props: dayProps) {
    super(props);
    this.state = { matches: [] };
  }
  hours = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ];
  componentDidMount() {}

  findEvents = (events: Array<{ startDate: string; endDate: string }>) => {
    let match: Array<{ start: number; end: number }> = [];
    if (events.length > 0) {
      events.map(event => {
        match.push({
          start: getHours(new Date(event.startDate)),
          end: getHours(new Date(event.endDate))
        });
      });
    }
    console.log(match);
    return match;
  };

  public render() {
    const { classes } = this.props;
    const events = this.findEvents(this.props.events);
    return (
      <Grid item xs={this.props.xs} className={classes.item}>
        <Typography variant="h6">
          {format(this.props.date, "EEEE - d/M")}
        </Typography>
        <Divider />
        <Grid container item xs={12} direction="row" className={classes.day}>
          {this.hours.map(hour => {
            if (
              events.some(event => {
                console.log("match?", hour, event.start);
                return event.start === hour;
              })
            ) {
              return <Hour key={`h-${hour}`} hour={hour} hidden={false} />;
            } else return <Hour key={`h-${hour}`} hour={hour} hidden={true} />;
          })}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Day);
