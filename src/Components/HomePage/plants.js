import React, { Component } from 'react'
import './plant.css'
import Banner from './BannerCards/Banner'
import Slider from './SliderSection/Slider'
import HomeTitle from './TitleSection/title'

export class plants extends Component {
    render() {
        return (
            <div>
                <HomeTitle />
               
                <Banner />
                <div className='slider-margins'>
                  <Slider />
                </div>
               
            </div>
        )
    }
}

export default plants
