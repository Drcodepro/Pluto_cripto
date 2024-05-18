import "./BuyPluto_Section.css";
import buyStep1_img from "../../Assets/image/buystep_1.png"
import buyStep2_img from "../../Assets/image/buystep_2.png"
import buyStep3_img from "../../Assets/image/buystep_3.png"
import buyStep4_img from "../../Assets/image/buystep_4.png"
import scramble_img from "../../Assets/image/scramble_img.png";


export default function BuyPluto(){
    return(
    <div className="buypluto_section_container">
        <h1 className="buyPluto_heading">HOW TO BUY <span>PLUTO COIN</span></h1>

        <div className="buy_steps_container">
            <div className="buy_step_box">
                <img src={buyStep1_img} alt="" />
                <div className="step_info_container">
                    <p className="step_number_heading">Step 1</p>
                    <p className="step_info">Visit VOIP.com and Click on "Buy Token" Button</p>
                </div>
            </div>

            <div className="buy_step_box">
                <img src={buyStep2_img} alt="" />
                <div className="step_info_container">
                    <p className="step_number_heading">Step 1</p>
                    <p className="step_info">Connect Your Wallet to Metamask and Use USDT</p>
                </div>
            </div>

            <div className="buy_step_box">
                <img src={buyStep3_img}alt="" />
                <div className="step_info_container">
                    <p className="step_number_heading">Step 1</p>
                    <p className="step_info">Choose the Number of USDT and "APPROVE"</p>
                </div>
            </div>

            <div className="buy_step_box">
                <img src={buyStep4_img} alt="" />
                <div className="step_info_container">
                    <p className="step_number_heading">Step 1</p>
                    <p className="step_info">Choose the Number of USDT and "BUY" Checking Transactions</p>
                </div>
            </div>
        </div>


        <div className="contract_section_container">
            <h1 className="contract_heading"><span>CONTRACT</span> ADDRESS</h1>
            <div className="address_container">
                <p>0XBB51784A641472F7B4FC5AF9CB4042BD52DE54A9</p>
                <button>COPY ADDRESS <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
            </div>

            <div className="scramble_container">
                <img src={scramble_img} alt="" />
                <div className="scramble_info_container">
                    <h1>Screamble it to make </h1>
                    <p className="scramble_info">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c. </p>
                </div>
            </div>
        </div>

    </div>)
}