import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const styles = theme => ({
  Description: {
    color: "#BDBDBD"
  },

  list: {
    marginTop: "30px"
  }
});

class Supervision extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={classes.Description}
              variant="h6"
              component="h3"
            >
              Team
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.list} container justify="center">
          <Grid item xs={6}>
            
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Supervision);
