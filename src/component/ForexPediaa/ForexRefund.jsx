import React from "react";
import "./ForexRefund.css"; // Create this CSS file

const ForexRefund = () => {
  return (
    <div className="refund-container">
      <h1 className="refund-title">Refund Policy</h1>

      <div className="refund-content">
        <p>
          Rohan Sapra is committed to providing exceptional service. We want you to feel comfortable about transacting with us.
          As this is an online workshop, you may contact us up till <strong>15 minutes before the first day of the workshop</strong> starts
          and request either a refund or, if you wish, to shift to another batch (subject to availability).
        </p>

        <p>
          To request a refund or batch change, please send an email with your name and a copy of your payment receipt to: 
          <a href="mailto:workshop@rohansapra.com"> workshop@rohansapra.com</a>
        </p>

        <p>
          Please note: We may not be able to accommodate your request if you fail to contact us before the workshop begins.
        </p>
      </div>
    </div>
  );
};

export default ForexRefund;
