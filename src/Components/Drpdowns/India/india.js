import React, { Component } from 'react';
import {Row,Card,CardTitle,CardText,Button} from 'reactstrap';
import './india.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat
 } from '@fortawesome/free-solid-svg-icons'


export class India extends Component {
constructor(props){
    super(props)
    this.state={
        likes:this.props.likes
    }
}
likes=()=>{
    this.setState({
        likes: this.state.likes +1
    })
}

    render() {
        return (
            
                <Row className='country-description'>
                  <b  style={{color:'rgb(15, 15, 92)'}}>   Shot Description About {this.props.Country}   </b>  
                    <Card body >  <b >  {this.props.Country}   </b>
                        <CardTitle>{this.props.Country} a beautiful country with {this.props.states} states</CardTitle>
                        <CardText>Around {this.props.people}millions people & with different religions,culture</CardText>
                        <Button style={{backgroundColor:'rgb(15, 15, 92)'}} > <b style={{paddingBottom:'10px'}}> {this.state.likes} </b> 
                        <i><FontAwesomeIcon   icon={faHeartbeat} className='icon-sizes'onClick={this.likes}   /> </i> 
                         <b  style={{paddingBottom:'10px'}}> {this.props.Country} </b>  </Button>
                  </Card>
                </Row>
            
        )
    }
}

export default India
