import React, { Component } from 'react';
import './forgotPassword.css';

import {Label, Row,Input, Button} from 'reactstrap'

export class ForgotPassword extends Component {
    render() {
        return (
            <div>
                 <Row className='forgot-table'  >
                    <Row className='forgot-content'>
                        <center>
                             <h3 className='forgot-title' >Forgot Password</h3>
                        </center>
                       
                        <Row className='forgot-lable'>
                            <Label>Enter OTP</Label>
                          <Input  placeholder='Enter otp....' />
                        </Row>
                        <Row>
                            
                        <Label  className='forgot'>Resend otp ?</Label>
                        </Row>
                        <Row className='forgot-lable'>
                            
                            <Label>Password</Label>
            
                            
                            <Input  placeholder=' set password' />
                           
                        
                        </Row>
                        <Row className='forgot-lable'>
                            
                            <Label>Confirm Password</Label>
            
                            
                            <Input  placeholder=' confirm password' />
                           
                        
                        </Row>
                        <Row>
                            <Button  className='btn-title'>Set Password</Button>
                        </Row>
                    </Row>

                </Row>
            </div>
        )
    }
}

export default ForgotPassword
