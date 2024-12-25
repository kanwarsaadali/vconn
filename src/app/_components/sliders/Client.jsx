"use client";

import advantage from "@data/sections/client.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Data from "@data/sliders/client";

const ClientSlider = ({ bgStyle }) => {
  return (
    <>
      {/* Partners Section */}
      <div
        className={`mil-${bgStyle}-bg mil-partners mil-relative`}
        style={{ marginTop: "-10px", backgroundColor: "#F8F8F8",  marginTop:"-40px"}}
      >
        <div className="container mil-p-60">
          <div className="mil-background-grid mil-softened" />
          <div className="row">
            <div className="col-12">
              <div className="mil-center mil-mb-60" style={{ marginTop: "-10px", color: "#17283E"}}>
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: advantage.subtitle }}
                  style={{ color: "#17283E", fontSize: "15px", marginTop:"20px" }}
                />
                {/* <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: advantage.title }}
                  style={{ color: "#17283E" }}
                /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container mil-p-60" style={{ marginTop: "-70px" }}>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 1, // Very short delay for smooth continuous scrolling
              disableOnInteraction: false, // Continue autoplay after interaction
              reverseDirection: true, // Reverse direction for autoplay
            }}
            speed={3000} // Adjust the speed of the scroll
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="swiper-container mil-infinite-show mil-up"
          >
            {Data.items.map((item, key) => (
              <SwiperSlide
                className="swiper-slide"
                key={`partners-slider-item-${key}`}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mil-partner-frame"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="mil-partner-img"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .swiper-container {
          direction: ltr; /* Change direction to left-to-right */
        }

        .mil-partners {
          padding: 0 5%; /* Add percentage-based padding for responsiveness */
          overflow: hidden; /* Prevent overflow for a clean appearance */
        }

        .mil-partner-frame {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto; /* Allow height to adapt based on content */
          max-height: 120px; /* Prevent images from becoming too large */
        }

        .mil-partner-img {
          max-width: 150%;
          max-height: 100%; /* Make image fill the container proportionally */
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .mil-partners {
            padding: 0 2%; /* Adjust padding for smaller screens */
          }

          .mil-partner-frame {
            height: auto;
          }

          .mil-partner-img {
            max-height: 80px; /* Adjust max height for smaller screens */
          }
        }

        @media (min-width: 1440px) {
          .mil-partner-frame {
            height: auto;
            max-height: 150px; /* Adjust for larger screen sizes */
          }
        }

        /* Additional padding and margins adjustments */
        .container {
          padding-left: 5%;
          padding-right: 5%;
        }

        .mil-center {
          text-align: center;
        }

        .mil-mb-60 {
          margin-bottom: 60px;
        }
      `}</style>
    </>
  );
};

export default ClientSlider;
