import "./Footer.css";
import FooterLogo from "../../assets/nav-logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="flex-center">
          <div style={{width: "80%",display: "flex", justifyContent: "space-between"}}>
            <div style={{ display: "flex", alignContent: "center" }}>
              <img className="footer-logo" alt="Footer Logo" src={FooterLogo} />
              <h4 className="website-rights">Ansaf Akhtar © 2023</h4>
            </div>
            <div>
              <i className="fa fa-github fa-2x icon-3d"></i>
              <i className="fa fa-linkedin fa-2x icon-3d"></i>
              <i className="fa fa-envelope fa-2x icon-3d"></i>
              <i className="fa fa-twitter fa-2x icon-3d"></i>
              <i className="fa fa-facebook fa-2x icon-3d"></i>
            </div>
          </div>
        </div>

        <div style={{height:"100%", bottom:"-60px", position:"relative"}}>
        <div id="wrap">
          <article id="lightings">
            <section id="one">
              <section id="two">
                <section id="three">
                  <section id="four">
                    <section id="five"></section>
                  </section>
                </section>
              </section>
            </section>
          </article>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
