import React, { Component } from 'react'
import './title.css';
import {Row} from 'reactstrap';

export class HomeTitle extends Component {
    render() {
        return (
            <Row className='titleName'>
                <h4>       
                     Horticulture Products
                </h4>
            </Row>
        )
    }
}

export default HomeTitle;
