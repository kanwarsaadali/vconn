"use client";

import { useState, useEffect } from "react";

const IdeasSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateText, setAnimateText] = useState(true);

  const testimonials = [
    {
      text: '"We are highly satisfied with the quality of service provided. Thank you for your continued support and professionalism."',
      name: "Syed Noman Ali",
      title: "Services Engineer, GreenPak Shipping",
      logos: ["/img/ideas/greenpak.svg"],
    },
    {
      text: '"Our experience with routine services has been consistently positive. For unique or one-time matters, a more proactive approach would further enhance the overall experience."',
      name: "Usama Dangra",
      title: "Director, SIR Consultants",
      logos: ["/img/ideas/sir.png"],
    },
    {
      text: '"Their approach to improving our hospital operations was revolutionary & efficient."',
      name: "Dr. Ahmed Khan",
      title: "Director, Indus Hospital",
      logos: ["/img/ideas/2.png"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateText(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        setAnimateText(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="ideas-section">
      <h3 className="section-title">What Our Customers Say</h3>

      <div className="testimonial-container">
        <div className="testimonial-content">
          <p className={`testimonial-text ${animateText ? "slide-in" : "slide-out"}`}>
            {testimonials[currentSlide].text}
          </p>

          <div className="testimonial-info">
            <h4 className="testimonial-name">{testimonials[currentSlide].name}</h4>
            <span className="testimonial-title">{testimonials[currentSlide].title}</span>
          </div>

          <div className="testimonial-logos">
            {testimonials[currentSlide].logos.map((logo, i) => (
              <img key={i} src={logo} alt="Logo" className="testimonial-logo" />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .ideas-section {
            text-align: center;
            padding: 50px 20px;
            background-color: rgb(12, 20, 31);
            font-family: "Lato", sans-serif;
          }

          .section-title {
            font-size: 40px;
            font-weight: 700;
            color: rgb(188, 255, 0);
            margin-bottom: 30px;
            text-transform: uppercase;
          }

          .testimonial-container {
            position: relative;
            width: 100%;
            max-width: 900px;
            margin: 0 auto;
            padding-bottom: 50px;
            overflow: hidden;
          }

          .testimonial-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .testimonial-text {
            font-size: 1.5rem;
            color: white;
            text-align: center;
            font-style: italic;
            padding: 10px;
            max-width: 90%;
            transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
          }

          .testimonial-text.slide-in {
            transform: translateY(0);
            opacity: 1;
          }

          .testimonial-text.slide-out {
            transform: translateY(20px);
            opacity: 0;
          }

          .testimonial-info {
            text-align: center;
            margin-top: 20px;
          }

          .testimonial-name {
            font-size: 1.5rem;
            font-weight: bold;
            color: white;
            margin-bottom: 5px;
          }

          .testimonial-title {
            font-size: 1.2rem;
            color: white;
            display: block;
          }

          .testimonial-logos {
            display: flex;
            justify-content: center;
            gap: 15px;
            padding: 4px;
            margin-top: 20px;
            flex-wrap: wrap;
          }

          .testimonial-logo {
            width: 200px;
            height: auto;
            border-radius: 4px;
          }

          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            .section-title {
              font-size: 28px;
              margin-bottom: 20px;
            }

            .testimonial-container {
              padding-bottom: 30px;
            }

            .testimonial-text {
              font-size: 1.2rem;
              padding: 8px;
              max-width: 95%;
            }

            .testimonial-name {
              font-size: 1.3rem;
            }

            .testimonial-title {
              font-size: 1rem;
            }

            .testimonial-logo {
              width: 150px;
            }
          }

          @media (max-width: 480px) {
            .section-title {
              font-size: 24px;
            }

            .testimonial-container {
              padding-bottom: 20px;
            }

            .testimonial-text {
              font-size: 1rem;
              padding: 6px;
              max-width: 100%;
            }

            .testimonial-name {
              font-size: 1.1rem;
            }

            .testimonial-title {
              font-size: 0.9rem;
            }

            .testimonial-logo {
              width: 120px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IdeasSection;
