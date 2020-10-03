import React from "react"
import "styles.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Header from "components/headers/light"
import Footer from "components/footers/FiveColumnWithInputForm"
import Portfolio from "components/cards/PortfolioTwoCardsWithImage"
import AboutInfo from "components/cards/ThreeColContactDetails"
import Testimonial from "components/testimonials/TwoColumnWithImage"

function About() {
    return (
      <AnimationRevealPage disabled>
        <Header />
        <AboutInfo />
        <Portfolio />
        <Testimonial />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default About