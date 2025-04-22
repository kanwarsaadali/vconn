"use client";

import { useEffect, useRef, useState } from "react";

const HeroOne = () => {
    function getParticleCount() {
        return window.innerWidth > 1024 ? 90 : window.innerWidth > 768 ? 60 : 40;
    }

    function getMaxDistance() {
        return window.innerWidth > 1024 ? 140 : window.innerWidth > 768 ? 90 : 60;
    }

    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const [particleCount, setParticleCount] = useState(getParticleCount());
    const [maxDistance, setMaxDistance] = useState(getMaxDistance());
    const [typedText, setTypedText] = useState("");
    const fullText = "Our IT Expert ensures compliant, smooth deployment, automated tasks, covered under multi-layered cybersecurity.";

    // useEffect(() => {
    //     let index = 0;
    //     setTypedText("");

    //     const interval = setInterval(() => {
    //         if (index < fullText.length) {
    //             setTypedText((prev) => prev + fullText[index]);
    //             index++;
    //         } else {
    //             clearInterval(interval);
    //         }
    //     }, 50);

    //     return () => clearInterval(interval);
    // }, []);


    // useEffect(() => {
    //     let index = 0;
    //     setTypedText(""); // Clear text initially
    
    //     const interval = setInterval(() => {
    //         if (index < fullText.length) {
    //             setTypedText((prev) => prev + fullText.charAt(index));
    //             index++;
    //         } else {
    //             clearInterval(interval);
    //         }
    //     }, 50);
    
    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        let index = 0;
        setTypedText(""); // Clear text initially
    
        const interval = setInterval(() => {
            if (index < fullText.length) {
                setTypedText(fullText.substring(0, index + 1)); // Ensure text builds correctly
                index++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    
        return () => clearInterval(interval);
    }, []);
    
    

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight / 1.2;

        let particles = Array.from({ length: particleCount }, () => new Particle(canvas));

        function Particle(canvas) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() * 2 - 1) * 0.5;
            this.vy = (Math.random() * 2 - 1) * 0.5;
            this.radius = 2.5;
        }

        Particle.prototype.move = function () {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        };

        function drawLines() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
                        ctx.lineWidth = 0.6;
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.move();
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
                ctx.fill();
                ctx.closePath();
            });
            drawLines();
            animationRef.current = requestAnimationFrame(animate);
        }

        animate();

        const resizeHandler = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight / 1.2;
            setParticleCount(getParticleCount());
            setMaxDistance(getMaxDistance());
            particles = Array.from({ length: particleCount }, () => new Particle(canvas));
        };

        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
            cancelAnimationFrame(animationRef.current);
        };
    }, [particleCount, maxDistance]);

    return (
        <div style={{
            width: "100vw",
            height: "75vh",
            position: "relative",
            background: "rgb(12, 20, 31)",
        }}>
            <canvas
                ref={canvasRef}
                style={{ display: "block", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            />
            <div style={{
                position: "absolute",
                top: "30%",
                left: "8%",
                color: "rgb(188, 255, 0)",
                fontSize: "clamp(1.5rem, 4vw, 3rem)",
                fontWeight: "bold",
                textAlign: "left",
                zIndex: 10,
                letterSpacing: "1px",
                textTransform: "uppercase",
                lineHeight: "1.2",
                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
                fontFamily: "'Lato', sans-serif",
                padding: "0 5%",
                width: "85%",
                maxWidth: "1200px",
            }}>
                <span style={{ color: "rgb(188, 255, 0)" }}>Improve</span> <span style={{ color: "white" }} > & </span> <span  style={{ color: "rgb(188, 255, 0)" }}>  Automate </span> <span style={{ color: "white" }}> Your Business Operations, </span> {" "}
                <span style={{ color: "white" }}> The </span> <span style={{ color: "rgb(188, 255, 0)" }}>Affordable </span> <span style={{ color: "white" }}>  Way </span>
            </div>
            <div style={{
                position: "absolute",
                top: "calc(52% + 3rem)",
                left: "8%",
                color: "white",
                fontSize: "clamp(1rem, 2vw, 1.5rem)",
                fontWeight: "500",
                textAlign: "left",
                zIndex: 10,
                maxWidth: "80%",
                lineHeight: "1.4",
                fontFamily: "'Lato', sans-serif",
                padding: "0 5%",
                opacity: 0.9,
            }}>
                {typedText}
            </div>
        </div>
    );
};

export default HeroOne;
