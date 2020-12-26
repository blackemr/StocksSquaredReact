import React from 'react';
import './Pricing.css';

function Pricing() {
  return (
    <div>
      <div className='blurRecPricing'></div>
      <img src={window.location.origin + '/images/NYEX.png'} className="stockMarket" alt="New york stock exchange"></img>
      <h1 className='pricing'>Pricing</h1>

      <a href="#" className="link">
        <div className="priceOptions">
          <h2 className="priceName">Free</h2>
          <p className="priceDesc">Free, limited access to our social media platform for individuals
            looking to start the finance world. Free users do not have access to
            strategies that are deemed high-risk. Free users can not join groups
            that focus on high-risk trading.
          </p>
          <h2 className="priceName">$0.00/mo</h2>
        </div>
      </a>

      <a href="#" className="link">
      <div className="priceOptions">
        <h2 className="priceName">College</h2>
        <p className="priceDesc">College students can verify their school
          emails to unlock the entire site. Our system becomes full-featured, and your
          account collects statistics about your trades. Students can join their
          colleges' page to receive training from their institution or a
          college approved representative.
        </p>
        <h2 className="priceName">$4.99/mo</h2>
      </div>
      </a>

      <a href="#" className="link">
      <div className="priceOptions">
        <h2 className="priceName">Full Feature</h2>
        <p className="priceDesc">For users that want full access to the platform but are not in
        college, the subscription is $9.99/month. Mentorship opportunities are
        available at this step, following strict verification. As with college
        students, full-featured users will have a statistic collection method
        for their strategies.
        </p>
        <h2 className="priceName">$9.99/mo</h2>
      </div>
      </a>

    </div>
  );
}

export default Pricing;
