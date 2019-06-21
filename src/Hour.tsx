import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles, WithStyles, Theme } from "@material-ui/core/styles";

const styles: any = (theme: Theme) => ({
  hour: {
    height: "calc(100% / 24)"
  },
  quarter: {
    height: "calc(100% / 4)",
    backgroundColor: "#567"
  },
  hidden: {
    visibility: "hidden"
  }
});

interface hourProps extends WithStyles<typeof styles> {
  hidden: boolean;
  hour: number;
}

interface hourState {}

class Day extends React.Component<hourProps, hourState> {
  constructor(props: hourProps) {
    super(props);
    this.state = {};
  }
  quarters = [1, 2, 3, 4];
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
        {this.quarters.map(value => {
          return <div className={classes.quarter}></div>;
        })}
      </Grid>
    );
  }
}

export default withStyles(styles)(Day);
