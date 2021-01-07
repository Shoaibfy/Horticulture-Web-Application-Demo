import React, { Component } from 'react';
import './TabContent.css'
import {  Row } from 'reactstrap';


import Slider from '../HomePage/SliderSection/Slider';
import Dashboard from '../Dashboard/Dashboard';
import Banner from '../HomePage/BannerCards/Banner';
import About from '../About/About';



export class TabContents extends Component {
  
    render() {
        return (
            <Row  className='content-background' >


                <Row className='content-heading'>
                    <h5>{this.props.title}</h5>
                </Row>

                <Row className='tabConent'>
                  { this.props.title ==='DASHBOARD' ? 
                    <Dashboard/> :
                     this.props.title ==='CHARTS' ? 
                    <Slider /> :
                     this.props.title ==='APPS' ? 
                    <Banner /> :
                     this.props.title ==='ICON_NAMES' ? 
                     <About /> :
                     this.props.title ==='TRANSACTIONS' ? 
                      <Banner />  :
                     this.props.title ==='EDITABLES' ? 
                     <About /> :
                     this.props.title ==='HORTICULTURE' ? 
                     <Banner />  :
                     this.props.title ==='TABLES' ? 
                     <About /> :
                     this.props.title ==='ORDERS' ? 
                     <Banner />  :
                     this.props.title ==='FLOWERS' ? 
                     <About /> :
                     this.props.title ==='ABOUT' ? 
                     <Banner />  :
                     <h3> Under Development...</h3>

             }
               
                </Row>
               
               
            </Row>
                
        )
    }
}

export default TabContents
