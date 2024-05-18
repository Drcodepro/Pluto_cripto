import "./Tokenomics.css"
import tokenomics_img from "../../Assets/image/tokenomics_img.svg";

export default function Tokenomics(){
    return(
    <div className="tokenomic_section_container">
        <h1 className="Tokenomic_Heading">Tokenomics</h1>
        <p className="Tokenomic_info">PLUTC ensures swift transactions, cutting costs, and minimizing risks. Its secure payment methods build trust between users and merchants,  </p>
        <img src={tokenomics_img} alt="" />

        <div className="tokenomic_box_container">
            <div className="tokenomic_box">
                <p>Token Name</p>
                <p>Pluto Coin</p>
            </div>

            <div className="tokenomic_box">
                <p>Symbol</p>
                <p>PLUTC</p>
            </div>

            <div className="tokenomic_box">
                <p>Decimal</p>
                <p>18</p>
            </div>

            <div className="tokenomic_box">
                <p>Network</p>
                <p>ERC20</p>
            </div>
            
            <div className="tokenomic_box">
                <p>Supply</p>
                <p>1 BILLION</p>
            </div>
        </div>

        <div className="clip"></div>
    </div>)
}