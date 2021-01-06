import React, { Component } from 'react'
import Banner from './BannerCards/Banner'
import Slider from './SliderSection/Slider'
import HomeTitle from './TitleSection/title'

export class plants extends Component {
    render() {
        return (
            <div>
                <HomeTitle />
                <Slider />
                <Banner />
            </div>
        )
    }
}

export default plants
