"use client";

import advantage from "@data/sections/partner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Data from "@data/sliders/partners";

const PartnersSlider = ({ bgStyle }) => {
  return (
    <>
      {/* Partners Section */}
      <div className={`mil-${bgStyle}-bg mil-partners mil-relative`} style={{ backgroundColor: "#F8F8F8"}}>
        <div className="container mil-p-60">
          <div className="mil-background-grid mil-softened" />
          <div className="row">
            <div className="col-12">
              <div className="mil-center mil-mb-60" style={{marginTop:"-40px"}}>
                <span
                  className="mil-suptitle mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: advantage.subtitle }}
                />
                {/* <h2
                  className="mil-upper mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: advantage.title }}
                /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container mil-p-60" style={{marginTop:"-50px"}}>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            speed={3000}
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
                  <img src={item.image} alt={item.alt} className="mil-partner-img" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .mil-partners {
          padding: 60px 0;
        }

        .mil-partner-frame {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px; /* Fixed height for consistency */
        }

        .mil-partner-img {
          max-width: 180%;
          max-height: 100px; /* Adjust to maintain aspect ratio */
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .mil-partners {
            padding: 30px 0;
          }

          .mil-partner-frame {
            height: 80px; /* Smaller height on mobile */
          }
        }

        @media (min-width: 1440px) {
          .mil-partner-frame {
            height: 120px; /* Larger height for fullscreen */
          }
        }
      `}</style>
    </>
  );
};

export default PartnersSlider;
    