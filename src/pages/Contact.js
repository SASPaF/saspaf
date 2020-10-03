import React from "react"
import "styles.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Header from "components/headers/light"
import Footer from "components/footers/FiveColumnWithInputForm"
import Contact from "components/forms/TwoColContactUsWithIllustrationFullForm"
import FAQ from "components/faqs/SingleCol"

function ContactUs() {
    return (
      <AnimationRevealPage disabled>
        <Header />
        <Contact />
        <FAQ />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default ContactUs