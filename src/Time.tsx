import Grid from "@material-ui/core/Grid";
import React from "react";
import { Theme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const styles: any = (theme: Theme) => ({
  gridRoot: {
    height: "95vh",
    marginTop: "-18px"
  },
  hour: {
    /* height: "calc((100% - 33px) / 24)", */
    color: "#aaa"
  }
});
function Time(props: any) {
  let hours = [
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

  const { classes } = props;
  return (
    <Grid
      container
      item
      xs={1}
      sm={1}
      direction="column"
      justify="space-evenly"
      alignItems="flex-end"
      className={classes.gridRoot}
    >
      <Typography variant="h6"> </Typography>
      {hours.map(hour => {
        return (
          <Typography variant="subtitle2" className={classes.hour}>
            {hour}
          </Typography>
        );
      })}
    </Grid>
  );
}
export default withStyles(styles)(Time);
