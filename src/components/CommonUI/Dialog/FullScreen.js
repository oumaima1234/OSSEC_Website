import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { baseColor } from "../../../parameters";
import Slide from "@material-ui/core/Slide";

const styles = {
  root: {
    position: "absolute"
  },
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1,
    fontSize:  ' 20px !important',
    fontFamily : '"Roboto", "Helvetica", "Arial", "sans-serif"'
  }
 
};

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: this.props.opened
  };

  componentWillReceiveProps(nextProps) {
    this.state.open = nextProps.opened;
  }


  render() {
    const { classes } = this.props;
    return (
      <Dialog
        id={this.props.id}
        fullScreen
        open={this.state.open}
        onClose={this.props.close}
        TransitionComponent={Transition}
        className={classes.root}
        style={{
          width: this.props.width,
          marginLeft: this.props.marginLeft,
          marginRight: this.props.marginLeft
        }}
      >
        <AppBar
          className={classes.appBar}
          style={{ backgroundColor: baseColor }}
        >
          <Toolbar>
            <IconButton
              id="ilm-full-screen-close"
              color="inherit"
              onClick={this.props.close}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <span  color="inherit" className={classes.flex}>
              {this.props.dialogTitle}
            </span>
            <Button
              id="ilm-full-screen-save"
              color="inherit"
              onClick= {() => {
                this.props.click() ;
                this.props.close();
               }}
            >
              {this.props.actionLabel}
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent style={{paddingTop:"1%"}}>{this.props.content}</DialogContent>
      </Dialog>
    );
  }
}
FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(FullScreenDialog);
