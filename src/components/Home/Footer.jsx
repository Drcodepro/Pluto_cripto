import "./Footer.css";

export default function Footer() {
  return (
    <div className="Home_footer_section">
      <div className="footer_mainContent">
        <div className="Home_footer_info">
          <div className="Home_Footer_logo_container">
            <img src="./pluto_logo.png" alt="logo" className="footer_logo" />
          </div>
          <p>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five c. When an
            unknown make a type specimen book. It has survived not only five c.
          </p>
        </div>

        <div className="other_info_contaner">
            
        <div className="footer_marketpace">
          <h2>marketpace</h2>
          <p>About</p>
          <p>Usecase</p>
          <p>Tokenomics</p>
          <p>Team</p>
        </div>

        <div className="footer_Company">
          <h2>COMPANY</h2>
          <p>Home</p>
          <p>Marketplace</p>
          <p>Top Creater</p>
          <p>Trading Cards</p>
        </div>

        <div className="footer_Services">
          <h2>Services</h2>
          <p>Home</p>
          <p>Marketplace</p>
          <p>Top Creater</p>

          {/* <div className="socials_container">
            <a href="">
              <img src="./Press_images/image1.png" alt="" />
              Telegram
            </a>
            <a href="">
              <img src="./Press_images/image2.png" alt="" />
              Instagram
            </a>
            <a href="">
              <img src="./Press_images/image3.png" alt="" />
              Facebook
            </a>
            <a href="">
              <img src="./Press_images/image4.png" alt="" />
              Twitter
            </a>
          </div> */}
        </div>
        </div>
      </div>

       <hr />

      <div className="footer_rights">
        <div className="rights"><p>@2024. All rights reserved </p></div>
        <div className="terms_plicy">
            <p>Terms & Agreements</p>
            <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
