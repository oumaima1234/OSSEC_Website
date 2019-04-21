import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import {baseColor} from '../../../parameters.js';
import { dispatchAction } from "../../../DispatchActions";
import { connect } from "react-redux";

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
        selectedValue: '' ,
        items : [],
        open: false
    };


    constructor(props) {
        super(props);
        if(this.props.data != undefined){
            this.state.items = this.props.data ;
        }
        if(this.props.selectedValue != undefined){
            this.state.selectedValue = this.props.selectedValue ;
        }
        
    }

    componentDidUpdate(){
        if(this.props.data != undefined){
            this.state.items = this.props.data;
        }
        if(this.props.selectedValue != undefined){
            this.state.selectedValue = this.props.selectedValue;
        }

    }

    componentWillReceiveProps(nextProps) {
        if ( this.state.selectedValue != nextProps.selectedValue) {
            this.state.selectedValue = nextProps.selectedValue;
        }
    }

    handleChange = event => {
        let s = this.state ;
        s.selectedValue = event.target.value ;
        this.setState(s);
        console.log("s");
            console.log(s);

        if(this.props.onChange != undefined){
            console.log("event");
            console.log(event);
            this.props.onChange(event);

        }

    };

    handleClose = () => {
        let s = this.state ;
        s.open = false ;
        this.setState(s);
    };

    handleOpen = () => {
        let s = this.state ;
        s.open = true ;
        this.setState(s);
    };

    render() {

        const { classes } = this.props;
        console.log('ttttttttttttttt');
        console.log(this.props.defaultValue);
        return (

            <form autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor={ this.props.id } style={{'color' : baseColor}}>{ this.props.title }</InputLabel>
                    <Select 
                    
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.selectedValue}
                        onChange={this.handleChange}
                        inputProps={{
                          name:  this.props.name ,
                          id:  this.props.id ,
                        }}
                    >

                        {this.state.items.map(item => (
                            <MenuItem value={item.value} key={item.value} >
                                { item.label }
                            </MenuItem>
                        ))}

                    </Select>
                    <FormHelperText>{ this.props.helperText }</FormHelperText>
                </FormControl>
            </form>
        );
    }
}

ControlledOpenSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        newCriteriaLabel: state.Criteria.newCriteria,
  
    };
  }
  
  export default connect(
    mapStateToProps,
    { dispatchAction }
  )(withStyles(styles)(ControlledOpenSelect));
  
