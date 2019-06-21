import React from "react";
import { format, getHours, isSameDay } from "date-fns";
import Grid, { GridSize } from "@material-ui/core/Grid";
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
  events: Array<{
    startDate: string;
    endDate: string;
    activity: string;
    location: string;
  }>;
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

  findEvents = (
    events: Array<{
      startDate: string;
      endDate: string;
      activity: string;
      location: string;
    }>
  ) => {
    let match: Array<{
      startHour: number;
      endHour: number;
      duration: number;
      activity: string;
      location: string;
    }> = [];
    if (events.length > 0) {
      events.forEach(event => {
        if (isSameDay(new Date(event.startDate), this.props.date)) {
          const startHour = getHours(new Date(event.startDate));
          const endHour = getHours(new Date(event.endDate));
          const duration =
            endHour >= startHour ? endHour - startHour : 24 - startHour;
          match.push({
            startHour,
            endHour,
            duration,
            activity: event.activity,
            location: event.location
          });
        }
      });
    }
    return match;
  };

  public render() {
    const { classes } = this.props;
    const events = this.findEvents(this.props.events);
    return (
      <Grid item xs={this.props.xs} className={classes.item}>
        <Typography variant="h6">
          {format(this.props.date, "EEE - d/M")}
        </Typography>
        <Divider />
        <Grid container item xs={12} direction="row" className={classes.day}>
          {this.hours.map((hour, index) => {
            let height = 1;
            let eventData = undefined;
            if (
              events.some(event => {
                height = event.duration;
                eventData = event;
                return event.startHour === hour;
              })
            ) {
              this.hours.splice(index + 1, 1);

              console.log(eventData);
              return (
                <Hour
                  key={`h-${hour}`}
                  hour={hour}
                  hidden={false}
                  height={height}
                  event={eventData}
                />
              );
            } else
              return (
                <Hour
                  key={`h-${hour}`}
                  hour={hour}
                  hidden={true}
                  height={1}
                  event={eventData}
                />
              );
          })}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Day);
