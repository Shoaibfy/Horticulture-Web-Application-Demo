import React, { Component } from 'react';
import './Dashboard.css'
import {  Table } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                  <Table className='table-margin' >
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
                
            </div>
        )
    }
}

export default Dashboard
