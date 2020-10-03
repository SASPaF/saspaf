import React from "react"
import "styles.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Header from "components/headers/light"
import Footer from "components/footers/FiveColumnWithInputForm"
import Blog from "components/blogs/PopularAndRecentBlogPosts"

function BlogPage() {
    return (
      <AnimationRevealPage disabled>
        <Header />
        <Blog />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default BlogPage