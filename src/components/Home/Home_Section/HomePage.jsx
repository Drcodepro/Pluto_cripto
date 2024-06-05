import AboutSection from "../AboutSection";
import BuyPluto from "../BuyPluto_Section";
import Footer from "../Footer";
import HeroSection from "../Hero_Section/HeroSection";
import KeyFeatureSection from "../KeyFeature_Section";
import PreSale from "../PreSale_Section";

import RoadMap from "../RoadMapSection";
import Tokenomics from "../Tokenomics";

export default function HomePage(){

    return(<>
       <HeroSection/>
       <PreSale/>
       <AboutSection/>
       <KeyFeatureSection/>
       <RoadMap/>
       <Tokenomics/>
       <BuyPluto/>
       {/* <Footer/> */}
    </>)
}