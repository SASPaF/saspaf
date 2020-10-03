import React from "react"
import "styles.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Header from "components/headers/light"
import Footer from "components/footers/FiveColumnWithInputForm"
import Events from "components/features/VerticalWithAlternateImageAndText"
import ChapterForm from "components/forms/SimpleContactUs"

function GetInvolved() {
    return (
      <AnimationRevealPage disabled>
        <Header />
        <Events />
        <ChapterForm />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default GetInvolved