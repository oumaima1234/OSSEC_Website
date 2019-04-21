import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import PropTypes from "prop-types";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { baseColor } from "../../../parameters";

class AlertDialog extends React.Component {
  state = {
    open: this.props.alert
  };

  componentWillReceiveProps(nextProps) {
    this.state.open = nextProps.alert;
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Dialog
        id={this.props.id}
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ color: baseColor }}>
          {this.props.alertTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {this.props.alertContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.handleClose}
            style={{ color: baseColor }}
            id={"btnCancel-" + this.props.id}
          >
            {this.props.btnCancel}
          </Button>
          <Button
            onClick={this.handleClose}
            style={{ color: baseColor }}
            id={"btnOk-" + this.props.id}
            autoFocus
          >
            {this.props.btnOk}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AlertDialog;
