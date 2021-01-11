import React, { Component } from 'react';
import {Row,Card,CardTitle,CardText,Button} from 'reactstrap';
import './china.css';

export class China extends Component {
    render() {
        return (
            <Row className='country-description'>
                    
            <Card body>
                <CardTitle>India a beautiful country with 29 states</CardTitle>
                <CardText>Around 125 crore population</CardText>
                <Button>Know More</Button>
          </Card>
        </Row>
        )
    }
}

export default China
