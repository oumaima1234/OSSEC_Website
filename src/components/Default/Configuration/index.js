import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  Description: {
    fontSize: '16px',
    color: "#BDBDBD",
  },

  list: {
    marginTop: "30px"
  }
});

class Configuration extends Component {
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
            {"DEFINE_ILM_RULES"}
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.list} container justify="center">
          <Grid item xs={6}>
            <h1> ttttttt</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Configuration);
