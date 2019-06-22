import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles, Theme } from "@material-ui/core/styles";
import { EventEntity } from "./eventInterface";

const styles: any = (theme: Theme) => ({
  hour: {
    height: (props: hourProps) => `calc((100% / (24/${props.height})))`,
    backgroundColor: "#456",
    border: "1px inset #456",
    color: "#ddd"
  },
  hidden: {
    visibility: "hidden"
  }
});

interface hourProps extends WithStyles<typeof styles> {
  hidden: boolean;
  hour: number;
  height: number;
  event: EventEntity | undefined;
}

interface hourState {}

class Hour extends React.Component<hourProps, hourState> {
  constructor(props: hourProps) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}

  public render() {
    const { classes } = this.props;
    return (
      <Grid
        item
        xs={12}
        className={`${classes.hour} ${
          this.props.hidden === true ? classes.hidden : ""
        }`}
      >
        <Typography variant="body1">
          {this.props.event ? this.props.event.activity : ""}{" "}
        </Typography>
        <Typography variant="subtitle2">
          {this.props.event
            ? `${this.props.event.startHour}:00 - ${this.props.event.endHour}:00`
            : ""}
        </Typography>
      </Grid>
    );
  }
}

export default withStyles(styles)(Hour);
