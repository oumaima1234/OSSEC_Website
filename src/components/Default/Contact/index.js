import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import Success from './Success';
import './contact.scss';
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    company: '',
    profession: '',
    message:''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, country, company, profession, message } = this.state;
    const values = { firstName, lastName, email, country, company, profession, message };

    switch (step) {
      case 1:
        return (
        <div>
          <div className="half">

          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
          </div>
          <div className="half right ">

                <div className="paper">
                  <div className="lines">
                  <div className="Lettertext">
                    Hello OSSEC Team, <br /><br />
                    I'm {`${firstName} ${lastName}`}. I am from {country}. 
                    <br/><br/>
                    I am a {profession}, working in {company}.
                    <br/><br/>
                    {message}
                    <br/><br />
                    You can reach me back on {email}.
                    <br/><br/>
                    Thanks and Regards &#9829;&#9829;&#9829; <p>{`${firstName} ${lastName}`} </p>
                   </div>
                   </div>
                 </div>
          </div>
          
        </div>


        );
      case 2:

        return  <Success />;
    
    }
  }
}

export default UserForm;