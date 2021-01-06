import React, { Component } from 'react';
import './TabContent.css'
import {  Row, Table } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';



export class TabContents extends Component {
    render() {
        return (
            <Row  className='content-background' >
                <Row className='content-heading'>
                    <h4>{this.props.title}</h4>
                </Row>
                <Row className='tabConent'>
                <Table >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td> <FontAwesomeIcon icon={faEdit} className='edit-icon' /> </td>
                      
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td> <FontAwesomeIcon icon={faEdit} className='edit-icon' /> </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td> <FontAwesomeIcon icon={faEdit} className='edit-icon' /> </td>
                        </tr>
                   
                    </tbody>
              </Table>

                </Row>
               
               
            </Row>
                
        )
    }
}

export default TabContents
