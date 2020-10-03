import React, {Component} from 'react';
import Hero from "components/hero/BackgroundAsImage"
import Footer from "components/footers/FiveColumnWithInputForm"
import Stats from "components/features/TwoColSingleFeatureWithStats2";
import About from "components/features/ThreeColWithSideImageWithPrimaryBackground"
import Upcoming from "components/cards/ThreeColSlider";
import AnimationRevealPage from "helpers/AnimationRevealPage"

function GetInvolved() {
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
  
export default GetInvolved