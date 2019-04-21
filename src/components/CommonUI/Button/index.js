import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

//import { baseColor } from "../../../parameters";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  cssRoot: {
    color: "#FFFFFF !important",
    "&:hover": {
    }
  },
  defaultCssRoot: {
    color: "#FFFFFF !important",
    backgroundColor: "#b5b2b2",
    "&:hover": {
      backgroundColor: "#b5b2b2"
    }
  }
});

function CustomizedInputs(props) {
  const { classes } = props;

  var bgCssClass = classes.cssRoot;
  if (props.theme !== undefined && props.theme == "default") {
    bgCssClass = classes.defaultCssRoot;
  }

  return (
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classNames(classes.margin, bgCssClass)}
        onClick={props.onClick}
        disabled={props.disabled !== undefined && props.disabled}
      >
        {props.value}
      </Button>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);
