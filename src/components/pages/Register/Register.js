/**
 * created by Samson Iyanda on 09-10-2018
 */
//

import React, { Component, Fragment } from "react";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import ReactTelInput from "react-telephone-input";
import "react-telephone-input/lib/withStyles";
// A X I O S
import API from "../../../api/api";
import flags from "../../../assets/flags.png";

import "./Register.css";
import Button from "../../common/Button/Button";
import { validateField, errorHandler } from "../../../utils";

class Register extends Component {
  state = {
    phone: '',
    email: '',
    errors: {
      phone: {
        value: false,
        touched: false
      },
      email: {
        value: false,
        touched: false
      }
    },
    isSubmitting: false
  }

  handlePhoneNumberChange = (phone, countryName) => {
    const phoneValidation = isValidPhoneNumber(String(phone));
    this.setState(prevState => {
      return {
        phone: phone,
        errors: {
          ...prevState.errors,
          phone: {
            ...prevState.errors.phone,
            touched: true,
            value: phoneValidation
          }
        }
      }
    });
  }

  handleChange = (e) => {
    const {value, name } = e.target;
    // validate email
    if (name === "email") {
      const emailValidation = validateField(value, name);
      this.setState(prevState => {
        return {
          [name]: value,
          errors: {
            ...prevState.errors,
            email: {
              ...prevState.errors.email,
              touched: true,
              value: emailValidation
            }
          }
        }
      });
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    //submit form
    const { phone, email } = this.state;
    console.log(phone, email);
    let formData = {
      data: {
        phoneNumber: phone,
        email
      }
    };
    // S H O W L O A D E R
    this.setState({
      isSubmitting: true
    });
    
    // S U B M I T  U S E R  C R E D E N T I A L
    API.post('submit', formData)
    .then(result => {
      this.props.history.push({
        pathname: '/confirmation',
        state: { result: result.data.jwt }
      });
    
      // H I D E L O A D E R
      this.setState({
        isSubmitting: false
      });
    })
    .catch(err => {
      const errMessage = errorHandler(err);
      alert(errMessage);
      // H I D E L O A D E R
      this.setState({
        isSubmitting: false
      });
    });
  }

  

  render() {
    const { email, phone, isSubmitting, errors } = this.state;
    return (
      <Fragment>
        <span>TRY TEXTPEDIA</span>
        <h1 className="is-size-1-desktop is-size-3-tablet is-size-3-mobile">SIGN UP</h1>

        <form className="form" onSubmit = { this.handleFormSubmit }>
          <div className="field">
            <label className="label has-text-primary">Phone Number</label>
            <div className="control">
              <ReactTelInput
                className="input"
                defaultCountry="ng"
                flagsImagePath= { flags }
                onChange={this.handlePhoneNumberChange}
                value = {phone}
                placeholder="Enter Phone Number"
              />
            </div>
            {!errors.phone.value && errors.phone.touched && <p className="help has-text-danger">Invalid Phone Number</p>}            
          </div>
          <div className="field">
            <label className="label has-text-primary">Email Address</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email Address"
                value = { email }
                onChange = { this.handleChange }
              />
            </div>
            {!errors.email.value && errors.email.touched && <p className="help has-text-danger">Email is Invalid</p>}            
          </div>
          <div className="field ">
            <div className="control">
              {/* R E U S E A B L E - C O M P O N E N T */}
              <Button className={"is-primary " + (isSubmitting ? "is-loading" : " ")} 
                disabled={(!errors.phone.value && errors.phone.touched) || (!errors.email.value && errors.email.touched)}>Sign Up</Button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Register;
