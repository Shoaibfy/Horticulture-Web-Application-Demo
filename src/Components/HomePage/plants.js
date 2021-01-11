import React, { Component } from 'react'
import './plant.css'
import Banner from './BannerCards/Banner'
import Slider from './SliderSection/Slider'
import HomeTitle from './TitleSection/title'
import Description from './Description/Description'

export class plants extends Component {
    render() {
        return (
            <div>
                <HomeTitle />
               
                <Banner />
                <div className='slider-margins'>
                  <Slider />
                  <Description />
                </div>
               
            </div>
        )
    }
}

export default plants
