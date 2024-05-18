

import "./AboutSection.css";
import astronotImage from "../../Assets/image/astronot_image2.png";
import Centralize from "../../Assets/icons/Centralized.png"
import epidemiology from "../../Assets/icons/Epidemiology.png"
import transaction from "../../Assets/icons/Transactional.png";

export default function AboutSection(){
    
    return(
    <div className="about_secton_container">
        <div className="what_know_container">
            <div className="what_know_info">
                <h1>About Us</h1>
                <h2>Want To Know <span>About US</span> ?</h2>
                <p>Experience the future of finance with Pluto Coin, where you can seamlessly convert fiat to cryptocurrency, trade assets, and send global payments with zero fees. Secure, fast, and versatile — Pluto Coin is your gateway to a new era of decentralized finance.Experience the future of finance with Pluto Coin, where you can seamlessly convert fiat to cryptocurrency, trade assets, and send global payments with zero fees. Secure, fast, and versatile—Pluto Coin is your gateway to a new era of decentralized finance.</p>
            </div>
            <img src={astronotImage} alt="" />
        </div>


        <div className="vision_mission_container">
            <h1 className="vision_mission_heading">Pluto's <span>Vision and Mission:</span> Transforming Decentralized Finance</h1>
            
            <div className="vision_mission_info">
                <div className="vision_mission_box">
                    <img src={Centralize} alt="" />
                    <h1>Decentralized Global Payments</h1>
                    <p>Pluto's $PLUTO altcoin enables fast, cost-effective cross-border payments, significantly reducing the time and cost compared to traditional banking methods.</p>
                </div>

                <div className="vision_mission_box">
                    <img src={transaction} alt="" />
                    <h1>Secure Transactions</h1>
                    <p>Pluto uses advanced security measures to protect users from threats like phishing and middleman attacks, ensuring safe and reliable transactions.</p>
                </div>

                <div className="vision_mission_box">
                    <img src={epidemiology} alt="" />
                    <h1>Building a Strong Community</h1>
                    <p>Pluto's marketing strategies focus on creating a robust ecosystem and community, with efforts aimed at promoting decentralized finance and expanding its user base across different regions.</p>
                </div>

            </div>
        </div>
    </div>)
}