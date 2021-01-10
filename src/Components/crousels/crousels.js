import React, { Component } from 'react';
import './crousels.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../images/bonsai plant.JPG';
import img2 from '../../images/tulsi-plant.jpg';
import img3 from '../../images/peace-lily.jpg';
 


// var Carousel = require('react-responsive-carousel').Carousel;

class  CarouselImage extends Component{

    constructor(){
        super()
        this.state ={
            images:[img1,img2,img3]
            //  [ 
            //     {
            //     img:img1,
            //     text:'image1'
            //    },
            //    {
            //     img:img2,
            //     text:'image2'
            //     }, 
            //    {
            //     img:img3,
            //     text:'image3'
            //    } ]
            
        }
    }            

    render(){
        return (
            <center>

          
            <Carousel  
                        autoPlay={true} 
                        interval={1000}
                        showThumbs={true}
                        infiniteLoop={true}
                        showStatus={false}
                        showIndicators={true}

                        // onChange={()=>this.setState({changed:!this.state.changed})}
                        // dynamicHeight={true}
                        >
                
                 {this.state.images.map((images) => {
                    return (
                        <div> 
                            <img src={images} alt='images' />
                            <p style={{color:'white'}} >{images.text} </p>
                        </div>
                    )
                } )} 
                
              
            </Carousel>
            </center>
        );
    }
    
    }

export default CarouselImage;