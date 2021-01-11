import React, { Component } from 'react'

import {Label, Row,Input, Button} from 'reactstrap'
import './loginPage.css'

export class LoginPage extends Component {
    render() {
        return (
            <div>
                <Row className='login-table'  >
                    <Row className='login-content'>
                        <center>
                             <h3 className='login-title' >Login</h3>
                        </center>
                       
                        <Row className='login-lable'>
                            <Label>Username</Label>
                          <Input  placeholder='Enter username' />
                        </Row>
                        <Row className='login-lable'>
                            
                            <Label>Password</Label>
            
                            
                            <Input  placeholder=' Enter password' />
                            <Row>
                                <Label  className='forgot'>forgot ?</Label>
                            </Row>
                        
                        </Row>
                        <Row>
                            <Button  className='btn-title'>Login</Button>
                        </Row>
                     
                    </Row>

                </Row>
            </div>
        )
    }
}

export default LoginPage
