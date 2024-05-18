import "./KeyFeature_Section.css";
import boxImg1 from "../../Assets/icons/feature_box_image1.png";
import boxImg2 from "../../Assets/icons/feature_box_image2.png";
import boxImg3 from "../../Assets/icons/feature_box_image3.png";
import boxImg4 from "../../Assets/icons/feature_box_image4.png";

export default function KeyFeatureSection(){
    return(
    <div className="keyFeatureSection_container">
        <div className="keyFeatureSection_head_container">
            <h1 className="keyFeatureSection_heading">Key Features</h1>
            <p className="keyFeatureSection_info">PLUTC ensures swift transactions, cutting costs, and minimizing risks. Its secure payment methods build trust between users and merchants, </p>
        </div>
        
        <div className="keyFeature_box_container" >
            <div className="keyFeature_box" id="box1">
               
                <div className="boxinfo">
                    <p>PLUTC ensures swift transactions, cutting costs, and minimizing risks. Its secure payment methods build trust between users and merchants, safeguarding against fraud and ensuring seamless transactions with confidence and reliability.</p>
                    <img src={boxImg1} alt="" id="box_img1" />
                </div>
                <div className="box_keys">
                    <div>Efficient</div>
                    <div>secure</div>
                    <div>Swift Transactions</div>
                </div>
            </div>

            <div className="keyFeature_box" id="box2">
                <h1>Streamlined Payment Solutions:</h1>
                <div className="boxinfo">
                    <p>Pluto's ecosystem simplifies payment processes for businesses and customers alike. With QR-code scanning and payment gateways, transactions become more flexible and automated, enhancing convenience and efficiency in the payment acceptance process.</p>
                    <img src={boxImg2} alt="" id="box_img2" />
                </div>
                <div className="box_keys">
                    <div>Simplified</div>
                    <div>Flexible</div>
                    <div>Automated</div>
                </div>
            </div>


            <div className="keyFeature_box" id="box3">
                <h1>Transparency and Accessibility</h1>
                <div className="boxinfo">
                    <p>Transparency in Pluto fosters trust, offering clear processes for user confidence. PLUTX Exchange facilitates easy cryptocurrency trading with low fees and diverse currency support, particularly benefiting beginners. </p>
                    <img src={boxImg3} alt="" id="box_img3"/>
                </div>
                <div className="box_keys">
                    <div>Trust-building</div>
                    <div>Clear processes</div>
                    <div>Beginner-friendly</div>
                </div>
            </div>


            <div className="keyFeature_box" id="box4">
                <h1>Innovative Ventures</h1>
                <div className="boxinfo">
                    <p>Pluto innovates with PlutOn-Ev and Pluto-Verse. PlutOn-Ev transforms electric vehicle charging through blockchain, promoting sustainability. Pluto-Verse offers immersive digital experiences, expanding the ecosystem beyond finance with rewards, enriching user interaction and utility.</p>
                    <img src={boxImg4} alt="" id="box_img4"/>
                </div>
                <div className="box_keys">
                    <div>Innovation</div>
                    <div>Sustainability</div>
                    <div> Immersion</div>
                </div>
            </div>
        </div>
    </div>)
}