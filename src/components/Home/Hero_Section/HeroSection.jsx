import "./HeroSection.css"
import astronotImage from "../../../Assets/image/astronot_image1.png"
import YellowStar from "../../../Assets/image/yellow_star.png";
import heroDash from "../../../Assets/image/hero_dash.png";

export default function HeroSection(){
    return(
    <div className=" hero_section_container ">
        <div className="hero_heading_container">
            <img src={heroDash} alt=""  className="heroDash"/>
            <h1 className=" hero_heading">Embrace the <span>Future</span> with <span>Pluto Coin</span> Fast, Secure, and <span>Limitless Crypto !</span></h1>
            <img src={YellowStar} alt="" className="yellowStar" />
        </div>
        
        <div className="hero_info_container ">
            <img src={astronotImage} alt=""/>          
            <div className="hero_info">
                <p>Experience the future of finance with Pluto Coin, where you can seamlessly convert fiat to cryptocurrency, trade assets, and send global payments with zero fees. Secure, fast, and versatile—Pluto Coin is your gateway to a new era of decentralized finance.</p>
                <div className="flex flex-wrap gap-5 box-border w-fit">
                    <button className="bg-white text-black rounded-3xl pr-3 pl-3 p-1.5 box-border">White Paper <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    <button className="bg-white text-black rounded-3xl pr-3 pl-3 p-1.5 box-border">Audits <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                </div>
            </div>
        </div>
    </div>)
}