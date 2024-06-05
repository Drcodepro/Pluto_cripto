
import "./RoadMapSection.css"
export default function RoadMap(){

    return(<div className="RoadMap_section_container">
        <h1 className="RoadMap_Heading">ROADMAP</h1>
        <p className="RoadMap_info">PLUTC ensures swift transactions, cutting costs, and minimizing risks. Its secure payment methods build trust between users and merchants, </p>

        <div className="RoadMap_Points_container">

            <div className="RoadMap_points" id="point_1">
                <div className="point_head">
                    <h1>Q1</h1>
                    <div>Ideation & Research</div>
                </div>
                <ul>
                    <li className="list-disc"> Idea origination </li>
                    <li>Restructuring and validation</li>
                    <li>Team building </li>
                    <li> Blockchain research and developmen</li>
                </ul>

            </div>

            <div className="RoadMap_points" id="point_1">
                <div className="point_head">
                    <h1>Q2</h1>
                    <div>Platform Development</div>
                </div>
                <ul>
                    <li className="list-disc"> Development and marketing </li>
                    <li>Community Building </li>
                    <li> Announcement of the token sale </li>
                    <li> Validation of the whitepaper</li>
                </ul>
            </div>

            <div className="RoadMap_points" id="point_1">
                <div className="point_head">
                    <h1>Q3</h1>
                    <div>Presale and Token Distribution</div>
                </div>
                <ul>
                    <li className="list-disc">Launch of the Official Token </li>
                    <li>CMC and CG listings </li>
                    <li>Pluto-Ex Exchange launch </li>
                    <li>Launching a beta website </li>
                </ul>
            </div>

            <div className="RoadMap_points" id="point_1">
                <div className="point_head">
                    <h1>Q4</h1>
                    <div>Staking platform</div>
                </div>
                <ul>
                    <li className="list-disc">Begin staking in a liquidity pool  </li>
                    <li> Strategic planning </li>
                </ul>
            </div>

            <div className="RoadMap_points" id="point_1">
                <div className="point_head">
                    <h1>Q5</h1>
                    <div>Platform Launch and Adoption</div>
                </div>
                <ul>
                    <li className="list-disc"> className="list-disc"Development of Pluto De-fi </li>
                    <li>Ecommerce payment partnership </li>
                    <li>Pluto De-fi and Pluto-PE will be launched</li>
                </ul>
            </div>

            <div className="RoadMap_points" id="point_1">
                <div className="point_head">
                    <h1>Q6</h1>
                    <div>Dex & Cex Listing </div>
                </div>
                <ul>
                    <li className="list-disc">Listing Pluto De-fi and Pluto-Pe on Dex & Cex </li>
                    <li>Ensuring liquidity provision</li>
                    <li>Promoting market accessibility</li>
                    <li>Enabling seamless exchanges</li>
                </ul>
            </div>

        </div>
    </div>)
}