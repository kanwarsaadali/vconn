"use client";

import advantage from "@data/sections/partner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Data from "@data/sliders/devsecops";
import useMediaQuery from "../../hooks/useMediaQuery";

const DevopsecopsSlider = ({ bgStyle }) => {
  const isScreenBelow426 = useMediaQuery("(max-width: 426px)");
  const isScreenBelow769 = useMediaQuery("(max-width: 769px)");


  return (
    <>
      {/* Partners Section */}
      <div
        className={`mil-${bgStyle}-bg mil-partners mil-relative`}
        style={{ backgroundColor: "#F8F8F8"}}
      >
        <div className="container mil-p-60">
          <div className="mil-background-grid mil-softened" />
          <div className="row">
            <div className="col-12">
              <div className="mil-center mil-mb-60s">
                {/* Title and subtitle can go here */}
              </div>
            </div>
          </div>
        </div>

        <div className="container mil-p-60" >
          <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 1, // Very short delay for smooth continuous scrolling
          disableOnInteraction: false, // Continue autoplay after interaction
          reverseDirection: true, // Reverse direction for autoplay
        }}
        speed={3000} // Adjust the speed of the scroll
        slidesPerView={isScreenBelow426 ? 4 : isScreenBelow769 ? 8 : 12}
        spaceBetween={10}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   480: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 30,
        //   },
        //   1440: {
        //     slidesPerView: 12,
        //     spaceBetween: 40,
        //   },
        // }}
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
                  className="mil-partner-frame-partners"
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
          // padding: 30px 0; /* Reduced padding for mobile devices */
        }

        .mil-partner-frame {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
        }

        .mil-partner-img {
          max-width: 100%;
          max-height: 80px; /* Height adjustment to keep aspect ratio */
          object-fit: contain;
        }

        /* Responsive styles for various breakpoints */
        @media (max-width: 320px) {
          .mil-partners {
            padding: 20px 0; /* Smaller padding for very small screens */
          }

          .mil-partner-frame {
            height: 70px; /* Adjust the height for very small screens */
          }

          .mil-partner-img {
            max-height: 70px;
          }
        }

        @media (min-width: 320px) and (max-width: 480px) {
          .mil-partners {
            // padding: 30px 0; /* Adjust padding for small screens */
          }

          .mil-partner-frame {
            height: 80px;
          }

          .mil-partner-img {
            max-height: 80px;
          }
        }

        @media (min-width: 480px) and (max-width: 768px) {
          .mil-partners {
            padding: 40px 0; /* Adjust padding for medium-sized screens */
          }

          .mil-partner-frame {
            height: 90px;
          }

          .mil-partner-img {
            max-height: 90px;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .mil-partners {
            padding: 20px 0; /* Larger padding for tablets */
          }

          .mil-partner-frame {
            height: 100px;
          }

          .mil-partner-img {
            max-height: 100px;
          }
        }

        @media (min-width: 1024px) and (max-width: 1440px) {
          .mil-partners {
            // padding: 60px 0; /* Padding for larger tablets */
          }

          .mil-partner-frame {
            height: 100px;
          }

          .mil-partner-img {
            max-height: 100px;
          }
        }

        @media (min-width: 1440px) {
          .mil-partners {
            // padding: 80px 0; /* Larger padding for large screens */
          }

          .mil-partner-frame {
            height: 120px;
          }

          .mil-partner-img {
            max-height: 120px;
          }
        }
      `}</style>
    </>
  );
};

export default DevopsecopsSlider;





