import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, Theme } from '@material-ui/core/styles';

const styles: any = (theme: Theme) => ({
  gridRoot: {
    height: '95vh',
    width: '64px',
    [theme.breakpoints.only('xs')]: {
      width: '32px'
    }
  },
  hour: {
    height: 'calc(100% / 24)',
    color: '#aaa',
    marginRight: '8px'
  },
  timeText: {
    fontSize: '0.70rem',
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.5rem'
    }
  },
  dayHeight: {
    height: 'calc(95vh - 24px)'
  }
});
function Time(props: any) {
  let hours = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00'
  ];

  const { classes } = props;
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="flex-end"
      justify="flex-end"
      className={classes.gridRoot}
    >
      <Grid
        container
        item
        direction="column"
        justify="flex-end"
        alignItems="flex-end"
        className={classes.dayHeight}
      >
        {hours.map(hour => {
          return (
            <div className={classes.hour}>
              <Typography
                variant="subtitle2"
                key={`time-hour-${hour}`}
                className={classes.timeText}
              >
                {hour}
              </Typography>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(Time);
