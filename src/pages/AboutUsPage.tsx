import { AboutHead,AboutBannerData,Cards1,Cards2 } from "../data/about"
import AboutUsSection from "../components/AboutUsSection"
import PageTitle from "../ui/PageTitle"
import AboutBanner from "../ui/CTASection"


const AboutUsPage = () => {
  return (
    <div>
      <PageTitle title={AboutHead.title} description={AboutHead.description}/>
     <div id="Achievements" className="custom-container" >
      <AboutUsSection titleSec={AboutHead.title1} descriptionSec={AboutHead.description1} cards={Cards1} />
      </div>
      <div id="goal" className="custom-container" >
      <AboutUsSection titleSec={AboutHead.title2} descriptionSec={AboutHead.description2} cards={Cards2} />
      </div>
      <AboutBanner background={AboutBannerData.background} word1={AboutBannerData.word1} line1={AboutBannerData.line1} line2={AboutBannerData.line2} btn={AboutBannerData.btn} />
     </div>

  )
}

export default AboutUsPage
