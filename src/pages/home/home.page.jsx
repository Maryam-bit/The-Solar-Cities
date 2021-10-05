import React from 'react'
import Slider from '../../components/slider/slider'
import About from '../../components/about/about'
import Services from '../../components/services/services'
import Whyus from '../../components/whyUs/whyus'
import Plans from '../../components/plans/plans'
const Home = () => {
    return (
        <>
            <Slider />
            <About />
            <Services />
            <br /><br /><br />
            <Whyus />
            <Plans />
        </>
    )
}

export default Home;