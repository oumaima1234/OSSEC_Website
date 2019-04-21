import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import baseColor from '../../../parameters.js';

const styles = theme => ({
   /* button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },*/
    formControl: {
        /* margin: theme.spacing.unit, */
        margin: 0,
        minWidth: 175,
        width: "90%"
    },
    button: {
        margin: "2px",
    }
});

class ControlledOpenSelect extends React.Component {
  state = {
    selectedValue: "",
    items: [],
    open: false
  };

  constructor(props) {
    super(props);
    if (this.props.data != undefined) {
      this.state.items["value"] = this.props.data;
    }
    if (this.props.selectedValue != undefined) {
      this.state.selectedValue = this.props.selectedValue;
    }
  }

  componentDidUpdate() {
    if (this.props.data != undefined) {
      this.state.items["value"] = this.props.data;
    }
    if (this.props.selectedValue != undefined) {
      this.state.selectedValue = this.props.selectedValue;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.selectedValue != nextProps.selectedValue) {
      this.state.selectedValue = nextProps.selectedValue;
    }
  }

  handleChange = event => {
    let s = this.state;
    s.selectedValue = event.target.value;
    this.setState(s);

    if (this.props.onChange != undefined) {
      this.props.onChange(event);
    }
  };

  handleClose = () => {
    let s = this.state;
    s.open = false;
    this.setState(s);
  };

  handleOpen = () => {
    let s = this.state;
    s.open = true;
    this.setState(s);
  };

  render() {
    const { classes } = this.props;
    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={this.props.id} style={{ color: baseColor }}>
            {this.props.title}
          </InputLabel>
          <Select
            required
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.selectedValue}
            onChange={this.handleChange}
            inputProps={{
              name: this.props.name,
              id: this.props.id
            }}
          >
            {this.state.items["value"].map(item => (
              <MenuItem
                value={item.value}
                key={item.value}
                //this part is added to disable from the selectItems the items previously choosed
                // this.props.toBeDisabled is an array that contains the items we want to disable from the selectBox
                disabled={
                  this.props.toBeDisabled
                    ? this.props.toBeDisabled.filter(x => x === item.label)
                    .length != 0
                    : false
                }
              >
                {item.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{this.props.helperText}</FormHelperText>
        </FormControl>
      </form>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledOpenSelect);
