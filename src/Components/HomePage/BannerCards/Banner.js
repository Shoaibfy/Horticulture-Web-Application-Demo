import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import img1 from '../../../images/aloe-vera.jpg';
import img2 from '../../../images/banana-plant.jpg';
import img3 from '../../../images/cupids-bow.jpg';
import img4 from '../../../images/haworthia-plant-.jpg';
import './banner.css';

const Banner = (props) => {
  return (
      <div className='cards-align'>
              <div className='card-size'>
                <Card className='image-size'>
                    <CardImg top className='banner-image-size' src={img1} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h6">Olev-Plant</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">50% off</CardSubtitle>
                    <CardText>Price:9999/-</CardText>
                    <Button className='btn-color'>Add to Cart</Button>
                    </CardBody>
                </Card>
               </div>
               <div className='card-size'>
                <Card className='image-size'>
                    <CardImg top className='banner-image-size' src={img2} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h6">Olev-Plant</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">50% off</CardSubtitle>
                    <CardText>Price:9999/-</CardText>
                    <Button className='btn-color'>Add to Cart</Button>
                    </CardBody>
                </Card>
               </div>
               <div className='card-size'>
                <Card className='image-size'>
                    <CardImg top className='banner-image-size' src={img3} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h6">Banana-Plant</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">50% off</CardSubtitle>
                    <CardText>Price:5999/-</CardText>
                    <Button className='btn-color'>Add to Cart</Button>
                    </CardBody>
                </Card>
               </div>
               <div className='card-size'>
                <Card className='image-size'>
                    <CardImg top className='banner-image-size' src={img4} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h6">Hawoa-Plant</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">50% off</CardSubtitle>
                    <CardText>Price:8999/-</CardText>
                    <Button className='btn-color'>Add to Cart</Button>
                    </CardBody>
                </Card>
               </div>
               <div className='card-size'>
                <Card className='image-size'>
                    <CardImg top className='banner-image-size' src={img1} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h6">Hawoa-Plant</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">50% off</CardSubtitle>
                    <CardText>Price:8999/-</CardText>
                    <Button className='btn-color'>Add to Cart</Button>
                    </CardBody>
                </Card>
               </div>
               <div className='card-size'>
                <Card className='image-size'>
                    <CardImg top className='banner-image-size' src={img2} alt="Card image cap" />
                    <CardBody>
                    <CardTitle tag="h6">Hawoa-Plant</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">50% off</CardSubtitle>
                    <CardText>Price:8999/-</CardText>
                    <Button className='btn-color'>Add to Cart</Button>
                    </CardBody>
                </Card>
               </div>

      </div>

  );
};

export default Banner;