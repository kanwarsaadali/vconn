"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";

const HeroOne = ({ videoLoaded, setVideoLoaded }) => {
    const targetText = "";
    const descriptionText = "";

    const handleVideoLoaded = () => {
        // setVideoLoaded(true);
    };

    return (
        <>
            <section className="mil-banner">
                {Data.bg_image.endsWith(".mp4") ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="mil-bg-video"
                        onCanPlay={() => {
                            console.log("onCanPlay triggered");
                            // handleVideoLoaded();
                        }}
                    >
                        <source src={Data.bg_image} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={Data.bg_image}
                        className="mil-bg-img"
                        alt="background"
                    />
                )}

                <div className="mil-overlay" />
                <div className="container">
                    <div className="mil-banner-content">
                        <div className="row align-items-end">
                            <div className="col-xl-7">
                                <div className="mil-mb-40">
                                    <span className="mil-suptitle mil-light mil-upper mil-mb-20">
                                        {Data.subtitle}
                                    </span>
                                    <h1 className="mil-upper mil-mb-20">
                                        {targetText.split(" ").map((word, index) => (
                                            <span
                                                className={`${
                                                    index === 1 ? "bussinessText" : "mil-light"
                                                }`}
                                                key={index}
                                            >
                                                {word}
                                                <br />
                                            </span>
                                        ))}
                                    </h1>
                                    <h5
                                        className="mil-description mil-light mil-mb-40"
                                        dangerouslySetInnerHTML={{ __html: descriptionText }}
                                    />
                                    {/* <Link
                                        href={Data.button.link}
                                        className="mil-link mil-light mil-upper"
                                    >
                                        {Data.button.label}{" "}
                                        <span className="mil-arrow">
                                            <img src="img/icons/1.svg" alt="arrow" />
                                        </span>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CSS Styles */}
            <style jsx>{`
                .mil-banner {
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: 82vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .mil-bg-video,
                .mil-bg-img {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: -1;
                }

                .mil-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    // background: rgba(0, 0, 0, 0.4);
                    z-index: 0;
                }

                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }

                .mil-banner-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 100%;
                    color: #fff;
                }

                .mil-mb-20 {
                    margin-bottom: 1.25rem;
                }

                .mil-mb-40 {
                    margin-bottom: 2.5rem;
                }

                .mil-suptitle {
                    font-size: 1.5rem;
                }

                h1 {
                    font-size: 4rem;
                    line-height: 1.2;
                }

                .mil-description {
                    font-size: 1rem;
                    line-height: 1.5;
                    color: #d0d0d0;
                }

                @media (max-width: 1200px) {
                    h1 {
                        font-size: 3.5rem;
                    }

                    .mil-description {
                        font-size: 1rem;
                    }
                }

                @media (max-width: 768px) {
                    h1 {
                        font-size: 2.5rem;
                        text-align: center;
                    }

                    .mil-suptitle {
                        font-size: 1.2rem;
                        text-align: center;
                    }

                    .mil-description {
                        font-size: 1rem;
                        text-align: center;
                    }

                    .mil-banner-content {
                        align-items: center;
                        text-align: center;
                    }
                }

                @media (max-width: 480px) {
                    h1 {
                        font-size: 2rem;
                    }

                    .mil-suptitle {
                        font-size: 1rem;
                    }

                    .mil-description {
                        font-size: 0.6rem;
                    }
                }
            `}</style>
        </>
    );
};

export default HeroOne;

