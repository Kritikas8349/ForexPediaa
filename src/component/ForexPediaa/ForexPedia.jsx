import { useState} from "react";
import { FaArrowRight } from "react-icons/fa";
import "./ForexPedia.css";



const ForexPedia = () => {
  const [current, setCurrent] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const testimonials = [
    {
      text: "I am experiencing that peace with OCM after launching!",
      name: "Pratiksha",
      image: "/rev2.png",
    },
    {
      text:
        "Received 122+ orders through OCM. It is an amazing strategy. It is simple to follow with no headache",
      name: "Mihir",
      image: "/rev3.png",
    },
    {
      text:
        "Got 33 purchases on Day 1 at ₹71 CPP and 56 purchases on Day 2 at ₹44 CPP",
      name: "Subrata",
      image: "/rev3.png",
    },
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel leo eros. Aenean a ligula nec justo ultricies ullamcorper nec sed metus.",
      name: "User 4",
      image: "/rev2.png",
    },
    {
      text: "Short testimonial",
      name: "User 5",
      image: "/rev2.png",
    },
    {
      text: "Another long testimonial for testing read more functionality. It keeps going and going to simulate a real user experience.",
      name: "User 6",
      image: "/rev1.png",
    },
    {
      text: "User 7's experience was absolutely incredible!",
      name: "User 7",
      image: "/rev3.png",
    },
    {
      text: "User 8 shares a deep and lengthy review that exceeds a few lines and needs to be collapsed initially for clean UI presentation.",
      name: "User 8",
      image: "/rev4.png",
    },
    {
      text: "User 9’s quote is very short.",
      name: "User 9",
      image: "/rev1.png",
    },
    {
      text: "Final testimonial. Very impressive course and simple to execute. The strategy is worth every rupee.",
      name: "User 10",
      image: "/rev2.png",
    },
  ];

  const visibleCards = 3;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (current + i) % testimonials.length;
      visible.push({ ...testimonials[index], realIndex: index });
    }
    return visible;
  };

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

    
  return (
    <div className="forex-container">
      
      
      <div className="top-strip">
        <span role="img" aria-label="alert">📣</span> 
        <strong>ATTN:</strong> IF YOU DON'T KNOW FB ADS BASICS, THIS IS NOT FOR YOU!
      </div>

      
      <section className="forex-hero">
        <h1 className="forex-title">
          Run Facebook Ads Peacefully using the <span className="highlight">One–Campaign–Method™</span>
        </h1>

        <p className="forex-subtitle">
          Learn the updated 2025 method to launch & scale Facebook Ads from spending ₹0 to up to ₹50K 
          <em> per day </em> profitably <em>without</em> any complexity...like <em>without</em> duplicating ad sets, 
          <em>without</em> launching multiple campaigns, and <em>without</em> laser targeting
        </p>

        
        <div className="video-wrapper">
          <div className="video-placeholder">
            <div className="play-button">▶</div>
          </div>
        </div>
      </section>

        <div className="join-now-container">
      <a href="https://your-link-here.com" className="join-now-btn">
        <span>JOIN NOW AT ₹99</span>
      </a>
      <p className="join-now-text">
        ⚠️ Join if it feels right. No pressure (:
      </p>
    </div>


    <div className="slider-container">
        <h2 className="headline">
          The best student success rate in the industry ❤️{" "}
          <span className="hashtag">#grateful</span>
        </h2>

        <div className="slider-wrapper">
          <button className="nav prev" onClick={prevSlide}>
            ❮
          </button>

          <div className="slider-multi">
            {getVisibleSlides().map((item, index) => {
              const isExpanded = expandedIndex === item.realIndex;
              const shortText =
                item.text.length > 120
                  ? item.text.slice(0, 120) + "..."
                  : item.text;

              return (
                <div className="card" key={index}>
                  <div className="img-box">
                    <img src={item.image} alt={`testimonial-${index}`} />
                  </div>
                  <blockquote className="card-text">
                    “<em>{isExpanded ? item.text : shortText}</em>”
                    {item.text.length > 120 && (
                      <span
                        className="read-more"
                        onClick={() => toggleReadMore(item.realIndex)}
                      >
                        {isExpanded ? " Show Less" : " Read More"}
                      </span>
                    )}
                    <br />
                    <strong>– {item.name}</strong>
                  </blockquote>
                </div>
              );
            })}
          </div>

          <button className="nav next" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-container">
  <div className="marquee">
    <span>✦ CONSULTING FUNNELS ✦ HIGH TICKET FUNNELS ✦ ECOM BUSINESS ✦ REELS COURSE ✦ DIGITAL PRODUCTS ✦ COACHING OFFERS</span>
    <span>✦ CONSULTING FUNNELS ✦ HIGH TICKET FUNNELS ✦ ECOM BUSINESS ✦ REELS COURSE ✦ DIGITAL PRODUCTS ✦ COACHING OFFERS</span>
  </div>
</div>

      </div>

      {/* Workshop Section */}
      <section className="workshop-section">
        <div className="workshop-left">
          <div className="image-wrapper">
            <img src="/rohan.png" alt="Instructor" />
          </div>
        </div>

        <div className="workshop-right">
          <h2>Who is this workshop for?</h2>
          <ul>
            <li><FaArrowRight /> If you tried running Facebook ads but got little to no results from conversion or lead ads in 2025</li>
            <li><FaArrowRight /> If you feel stressed launching and managing multiple campaigns/ad sets and not getting quality leads</li>
            <li><FaArrowRight /> If your ad cost rises as soon as you increase the budget by 10% or 20% following the usual scaling method</li>
            <li><FaArrowRight /> If you tried duplicating campaigns/ad sets in order to scale, but it failed to deliver stable results</li>
            <li><FaArrowRight /> If you are using laser targeting and audience interest stacking but not getting consistent results</li>
          </ul>
        </div>
      </section>


      <div className="business-section">
  <p className="business-text">
    "If you truly want to build a business online that makes you enough money and keeps you at peace, paid traffic generation with less complexity is essential."
  </p>

  <div className="logos-row">
    <img src="/hundred.png" alt="Logo 1" />
  </div>

  <div className="join-now-container">
    <a href="https://your-link-here.com" className="join-now-btn">
      <span>JOIN NOW AT ₹99</span>
    </a>
    <p className="join-now-text">
      ⚠️ Join if it feels right. No pressure (:
    </p>
  </div>
</div>


<div className="ads-container">
      <section className="ads-section">
        <div className="ads-left">
          <div className="ads-image-wrapper">
            <img src="/rohan2.png" alt="Workshop Instructor" />
          </div>
        </div>

        <div className="ads-right">
          <h2>What will you learn in the workshop?</h2>
          <ul>
            <li>
              <FaArrowRight /> The campaign launch method if and when you are launching an ad campaign for the first time
            </li>
            <li>
              <FaArrowRight /> The strategy to test different audience interests by checking audience overlap before you even launch
            </li>
            <li>
              <FaArrowRight /> Our proprietary ad testing framework 1:1:3 and 1:1:2 that allows to test and find a winning ad fast
            </li>
            <li>
              <FaArrowRight /> The science behind ad fatigue, audience overlap, and auction overlap and how to avoid the same
            </li>
            <li>
              <FaArrowRight /> The ad scaling system that is helping us take our clients accounts from spending 0 to up to 50K per day
            </li>
            <li>
              <FaArrowRight /> What is the One-Campaign-Method™ and how to start implementing it for a stable ad performance
            </li>
          </ul>
        </div>
      </section>

      <div className="ads-bottom">
        <p className="ads-text">
          "The only Facebook ads system that is verified of allowing businesses to launch and scale their ads with peace in 2025... using broad or open targeting."
        </p>

        <div className="ads-logo">
          <img src="/hundred.png" alt="Verified Logo" />
        </div>

        <div className="ads-join-container">
          <a href="https://your-link-here.com" className="ads-join-btn">
            JOIN NOW AT ₹99
          </a>
          <p className="ads-join-note">⚠️ Join if it feels right. No pressure (:</p>
        </div>
      </div>
    </div>



    <div className="resonate-container">
      <section className="resonate-section">
        {/* 📸 LEFT IMAGE */}
        <div className="resonate-left">
          <div className="resonate-image-wrapper">
            <img src="/rohan3.png" alt="Workshop Instructor" />
          </div>
        </div>

        {/* 📚 RIGHT CONTENT */}
        <div className="resonate-right">
          <h2>Do you resonate with any of the below...</h2>
          <ul>
            <li>
              <FaArrowRight /> "I have been trying to learn Facebook Ads since a long time, but I always get confused on budgets/campaigns"
            </li>
            <li>
              <FaArrowRight /> "I don't understand how to manage & optimize campaigns/ad sets. Should I do ABO or CBO in 2025?"
            </li>
            <li>
              <FaArrowRight /> "I tried interest targeting and laser targeting, but nothing works consistently. It is driving me crazy"
            </li>
            <li>
              <FaArrowRight /> "I tried increasing the budget by 10-20%, but my ads stop performing as soon as I increase the budget"
            </li>
            <li>
              <FaArrowRight /> "I'm sick of inconsistency in my ads performance. One day it's great, but the next day it is terrible"
            </li>
            <li>
              <FaArrowRight /> "I don't know how to launch and scale my ad account, fast and with peace. I want an end-to-end system"
            </li>
          </ul>
        </div>
      </section>

      {/* 🧠 BOTTOM SECTION */}
      <div className="resonate-bottom">
        <p className="resonate-text">
          If you said <strong>YES</strong> to any of the above, this workshop is a must attend for you.
        </p>

        <div className="resonate-logo">
          <img src="/hundred.png" alt="Verified Logo" />
        </div>

        <div className="resonate-join-container">
          <a href="https://your-link-here.com" className="resonate-join-btn">
            JOIN NOW AT ₹99
          </a>
          <p className="resonate-join-note">⚠️ Join if it feels right. No pressure (:</p>
        </div>
      </div>
    </div>



    <div className="landing-container">
      <h4 className="motto-title">THE MOTTO</h4>
      <h1 className="main-title">More Success and Less Stress!</h1>

      <div className="profile-section">
        <img src="/rohan4.png" alt="Rohan sitting on couch" className="profile-img" />
        <div className="profile-text">
          <h3>MEET ROHAN</h3>
          <p><strong>Founder of Impact XL (Advertising Agency)</strong></p>
          <p>
            It was May 2022 and my funnel which made me more than 1 Crore in revenue in
            12 months was now bleeding. My Merchant Credit Card (over maxed) was at ₹10,000. 
            I was spending 30K per day. Can you imagine the pressure? I was using money at 10x speed.
          </p>
          <p>
            The agency handling my ads had no logical answers to my questions. And it was at that moment 
            I realized that everything I worked hard for might just end. Little did I know, it was the beginning 
            of something much bigger...
          </p>
          <p>That’s how Impact XL was born.</p>
          <p>
            I started digital marketing in 2015 and out of my experience of learning Facebook ads 
            from all over the globe, I knew that the entire approach of Facebook Advertising was 
            vastly broken. There wasn’t a single system that was simple enough.
          </p>
          <p>
            After nearly escaping from hitting a dead end, I can tell you Rohan is legit about 
            ROAS. Businesses talk about 5x-10x ROAS. It’s about Freedom. It means, it’s finally possible. 
            I’ve seen marketers suffer going through a mountain of trial and error. I had to create a system 
            so that my team could win while ENJOYING their time OUT of work and without getting into rut mode.
          </p>
          <p>
            OCM is not about 10x ROAS in 30 days. You and I both know that such shortcuts do not exist. 
            OCM is about knowing and managing ads to build businesses that can grow long-term. 
            It’s a logical approach to media buying that makes it “human” to manage advertising. 
            P.S: I’ll be super glad if I get the opportunity to share it with you in the workshop.
          </p>
        </div>
      </div>

      <div className="quote-section">
        <p>
          <em><strong>
            "The business you want, the money you want, the predictable growth you want...everything can be achieved
            if you learn how to manage paid advertising well!" 
          </strong></em>
        </p>
      </div>

      <div className="cta-section">
        <button className="join-btn">JOIN NOW AT ₹99</button>
        <p className="disclaimer">⚠️ Join if it feels right. No pressure ☺</p>
      </div>
    </div>



       <div className="recap-container">
      <div className="recap-grid">
        {/* LEFT SIDE - Image and Badge */}
        <div className="recap-left">
          <div className="recap-image-wrapper">
            <img src="/rohan5.png" alt="Rohan Sapra" className="recap-image" />
            <div className="badge">
              <h3>Rohan Sapra</h3>
              <p>
                Founder, ImpactXL Advertising Agency <br />
                Advertising Copywriter | Meta Ads Consultant
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - What You'll Learn */}
        <div className="recap-right">
          <h2 className="recap-heading">Here's a quick recap of what you'll learn…</h2>
          <ul className="recap-list">
            <li><span>✔</span> How to avoid audience overlap, auction overlap, and ad fatigue for more stability</li>
            <li><span>✔</span> The ad scaling system to spend 30K–50K per day with peace</li>
            <li><span>✔</span> Proprietary Ad Testing Framework 1:1:3 and 1:1:2</li>
            <li><span>✔</span> The OCM Ad campaign launch framework</li>
            <li><span>✔</span> Future of Facebook Ads interest-targeting for best ROI in 2025</li>
          </ul>
        </div>
      </div>

      {/* Quotation Section */}
      <div className="quote-section">
        <p>
          "If you too are fed up of inconsistent performance and want to learn the latest <strong>Facebook Ads strategies</strong> 
          to transform your ads performance, <strong>you must attend this workshop</strong>" 
        </p>
      </div>

      {/* Icons and Join CTA */}
      <div className="badge-row">
        <img src="/hundred.png" alt="badge1" />
      </div>

      <div className="cta-section">
        <button className="join-btn">JOIN NOW AT ₹99</button>
        <p className="disclaimer">⚠️ Join if it feels right. No pressure ☺</p>
      </div>
    </div>


    




    </div>
  );
};


export default ForexPedia;
