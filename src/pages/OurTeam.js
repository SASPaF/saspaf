import React, {Component} from 'react';
import Header from "components/headers/light"
import Footer from "components/footers/FiveColumnWithInputForm"
import Team from "components/cards/ProfileThreeColGrid"
import AnimationRevealPage from "helpers/AnimationRevealPage"

function OurTeam() {
    return (
      <AnimationRevealPage disabled>
        <Header />
        <Team />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default OurTeam