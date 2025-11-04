import React from "react";
import "./ForexFooter.css";
import { Link } from "react-router-dom"; // ✅ Import added

const ForexFooter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <p className="footer-copyright">
          Copyright © 2025 | <span>Rohan Sapra</span> | Impact XL (Advertising Agency)
        </p>

        <p className="footer-disclaimer">
          This website is in no way affiliated with Facebook or any Facebook entities. Once you
          leave Facebook the responsibility no longer is on their site. If you have any questions
          feel free to contact our team.
        </p>

        <p className="footer-disclaimer">
          We at Impact XL, make every effort to ensure that we accurately represent our products and
          services and their potential for income & results. Earning, income, and results statements
          made by our company and its customers are estimates of what we think you can earn. There
          is no guarantee that you will make these levels of income and you accept the risk that the
          earnings and income statements differ by individuals. As with any business, your results
          may vary and will be based on your effort, business experience, expertise, and level of
          desire. There are no guarantees concerning the level of success you may experience.
        </p>

        <p className="footer-disclaimer">
          The testimonials and examples used are exceptional results, which do not apply to the
          average purchaser and are not intended to represent or guarantee that anyone will achieve
          the same or similar results. Each individual’s success depends on his or her background,
          dedication, desire, and motivation. There is no assurance that examples of past earnings
          can be duplicated in the future. We cannot guarantee your future results and/or success.
          There are some unknown risks in business and on the internet that we cannot foresee which
          can reduce results. We are not responsible for your actions.
        </p>
      </div>

      <div className="footer-links">
        <Link to="/terms" className="footer-link">Terms & Conditions</Link>
        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        <Link to="/refund" className="footer-link">Refund Policy</Link>
        <Link to="/disclosure" className="footer-link">Disclosure Policy</Link>
        <Link to="/contact" className="footer-link">Contact Us</Link>
      </div>
    </footer>
  );
};

export default ForexFooter;
