import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import addNotification from "../../CommonUI/Notification"

const styles = theme => ({

	textField: {
	  //marginLeft: theme.spacing.unit,
	  //marginRight: theme.spacing.unit,
	  //width: 200,
	  width: '100%',
		

	},
	dense: {
	  marginTop: 19
	},
	menu: {
	  width: 200
	}, 
	button: {
	  margin: 15
	}
      });

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

 
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { values, handleChange, classes } = this.props;
    return (
        <div className='contact__container'>
	<div className="contact__title">
	 <h2>Contact us<hr/></h2>

	</div>
	<br/>
	<MuiThemeProvider className="contact__form">

          <TextField
	    className={classes.textField}
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
	    defaultValue={values.firstName}
	    margin="normal"

          />
          <TextField
	    className={classes.textField}
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
	    defaultValue={values.lastName}
	    margin="normal"

          />
          <br />
          <TextField
	    className={classes.textField}
            hintText="Enter Your Email"
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
	  <TextField
	    className={classes.textField}
            hintText="Enter Your Country"
            floatingLabelText="coutry"
            onChange={handleChange('country')}
            defaultValue={values.county}
          />
          <br />
	  <TextField
    	    className={classes.textField}
            hintText="Enter Your Company"
            floatingLabelText="Company"
            onChange={handleChange('company')}
            defaultValue={values.company}
          />
	  <TextField
	    className={classes.textField}
            hintText="Enter Your Profession"
            floatingLabelText="Profession"
            onChange={handleChange('profession')}
            defaultValue={values.profession}
          />
          <br />
	  <TextField
            style={{ margin: 8 }}
	    hintText="Enter Your Message"
            floatingLabelText="Message"
            onChange={handleChange('message')}
	    defaultValue={values.message}
	    multiline="true"
	    //rows={2}
	    rowsMax={Infinity}	    
	    fullWidth
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
	  
	        </MuiThemeProvider>


</div>
    );
  }
}


FormUserDetails.propTypes = {
	classes: PropTypes.object.isRequired
      };
      
      

export default withStyles(styles)(FormUserDetails);