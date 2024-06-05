
import "./PreSale_Section.css";
import offerPoster from "../../Assets/image/preSale_offer-poster.png"
import bg_img from "../../Assets/icons/pluto_logo_Single.png";
import eth_buy_img from "../../Assets/icons/ETH_BUY.png"
import usdt_buy_img from "../../Assets/icons/USDT_BUY.png"
import bnb_buy_img from "../../Assets/icons/BNB_BUY.png";
import ETH_logo from "../../Assets/icons/ethereum-logo.png";
import coin_logo from "../../Assets/icons/coin_logo.png"



export default function PreSale(){
    return(
        <div className="Presale_Section_container">
            <div className="presale_info_container">
                <h1>Presale Is Live !</h1>
                <h2>Hurry Up 😀</h2>
                <p>Pluto Token's presale offers a unique opportunity to invest in the future of decentralized finance. With its innovative approach and strong community backing, Pluto aims to redefine the landscape of digital assets.</p>
                <img src={offerPoster} alt="" />
            </div>

            <div className="presale_buy_container">
                <img src={bg_img} alt="" className="background_img" />  
                <div className="main_box_contaner">
                    <h1>Pluto Presale</h1>
                    <button><p>Connect Wallet</p></button>

                    <div className="price_comparison">
                        <p>Listing Price: &nbsp; $0.20</p>
                        <i class="fa-solid fa-arrow-right"></i>
                        <p>Next Price: &nbsp; $0.40</p>
                    </div>

                    <div className="buy_with_container">
                        <p>Buy with</p>
                        <div className="buy_options">
                            <img src={eth_buy_img} alt="" />
                            <img src={usdt_buy_img} alt="" />
                            <img src={bnb_buy_img} alt="" />
                        </div>
                    </div>

                    <div className="input_1"><p>ETH</p> <img src={ETH_logo} alt="" /></div>

                    <div className="input_2_container">
                        <p className="input_2_heading">You Will Get</p>
                        <div className="input_2">
                            <p>PLUTO</p>  
                            <img src={coin_logo} alt="" />
                        </div>
                    </div>
                    <button className="Approve_btn"><p>Approve</p></button>
                </div>
                
            </div>
        </div>
    )
}