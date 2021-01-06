import React, { Component } from 'react'
import './productName.css';
import {Row} from 'reactstrap';

export class ProductName extends Component {
    render() {
        return (
            <Row className='productName'>
                <h4>       
                     {this.props.productName}
                </h4>
            </Row>
        )
    }
}

export default ProductName
