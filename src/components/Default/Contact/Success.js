import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Snackbar from "../../CommonUI/Snackbar"
import Contact from "../../Default/Contact"

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
         <Snackbar  message = "hhhh" type = 'success' open= {true}></Snackbar>
	 <Contact></Contact>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;