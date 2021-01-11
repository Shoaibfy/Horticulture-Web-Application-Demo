import React, { Component } from 'react';
import {Row,Card,CardTitle,CardText,Button} from 'reactstrap';
import './india.css';

export class India extends Component {
    render() {
        return (
            
                <Row className='country-description'>
                  <b  style={{color:'rgb(15, 15, 92)'}}>   Shot Description About {this.props.Country}   </b>  
                    <Card body >  <b >  {this.props.Country}   </b>
                        <CardTitle>{this.props.Country} a beautiful country with {this.props.states} states</CardTitle>
                        <CardText>Around {this.props.people}millions people & with different religions,culture</CardText>
                        <Button style={{backgroundColor:'rgb(15, 15, 92)'}} > <b> {this.props.Country} </b>  </Button>
                  </Card>
                </Row>
            
        )
    }
}

export default India
