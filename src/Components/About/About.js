import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import img1 from '../../images/chamaedorea-palm-plant.jpg';
//   import img2 from '../../../images/banana-plant.jpg';
//   import img3 from '../../../images/cupids-bow.jpg';
//   import img4 from '../../../images/haworthia-plant-.jpg';
  import './About.css';

export class About extends Component {
    render() {
        return (
            <div className='cards-align' >
                      <div className='card-size'>
                          <Card className='image-size'>
                            <CardImg top className='banner-image-size' src={img1} alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h6">Dezen Technologies</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Software Hub</CardSubtitle>
                            <CardText>Hydrabad</CardText>
                            <Button className='btn-color'>READ..</Button>
                            </CardBody>
                        </Card>
               </div>
            </div>
        )
    }
}

export default About
