"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <div>
      <Intro/>

      <Footer/>
    </div>
  );
}
