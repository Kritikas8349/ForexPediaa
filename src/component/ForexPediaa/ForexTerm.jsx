import React from "react";
import "./ForexTerm.css";

const ForexTerm = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms & Conditions</h1>

      <div className="terms-content">
        <h2>1. Introduction</h2>
        <p>
          The following terms and conditions govern your participation in the workshop
          conducted by Rohan Sapra (“Presenter”) on the website{" "}
          <a href="https://rohansapra.onecampaignmethod.com/" target="_blank" rel="noopener noreferrer">
            https://rohansapra.onecampaignmethod.com/
          </a>{" "}
          (“Website”). By registering for and attending the workshop, you agree to comply with these terms.
        </p>

        <h2>2. Workshop Registration</h2>
        <p>2.1. To participate in the workshop, you must register on the website and provide accurate and complete information.</p>
        <p>2.2. The Presenter reserves the right to refuse or cancel registration at their discretion.</p>

        <h2>3. Payment and Refund Policy</h2>
        <p>3.1. Payment for the workshop is required at the time of registration.</p>
        <p>3.2. Refunds will be issued only by the refund policy specified on the Website.</p>

        <h2>4. Workshop Content</h2>
        <p>4.1. The workshop content, including but not limited to materials, presentations, and discussions, is the intellectual property of the Presenter.</p>
        <p>4.2. Participants agree not to record, reproduce, or distribute workshop content without explicit permission from the Presenter.</p>

        <h2>5. Participant Conduct</h2>
        <p>5.1. Participants are expected to conduct themselves respectfully and professionally during the workshop.</p>
        <p>5.2. The Presenter reserves the right to remove any participant who engages in disruptive or inappropriate behavior.</p>

        <h2>6. Disclaimer</h2>
        <p>6.1. The information provided in the workshop is for educational purposes only and should not be considered financial advice.</p>
        <p>6.2. The Presenter is not responsible for any financial decisions made by participants based on the workshop content.</p>

        <h2>7. Modifications to Terms</h2>
        <p>7.1. The Presenter reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on the Website.</p>

        <h2>8. Governing Law</h2>
        <p>8.1. These terms and conditions are governed by the laws of Gurugram, India.</p>

        <p className="terms-note">
          By registering for this FB Ads Workshop, you acknowledge that you have read, understood, and agree to these terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default ForexTerm;
