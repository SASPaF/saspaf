import React, {Component} from 'react';
import Hero from "components/hero/BackgroundAsImage"
import Footer from "components/footers/FiveColumnWithInputForm"
import Stats from "components/features/TwoColSingleFeatureWithStats2";
import About from "components/features/TwoColWithButton"
import Upcoming from "components/cards/ThreeColSlider";
import AnimationRevealPage from "helpers/AnimationRevealPage"

function Home() {
    return (
      <AnimationRevealPage disabled>
        <Hero />
        <About />
        <Stats />
        <Upcoming />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default Home