import React from "react";
import vi1 from "../assets/vi1.mp4"; // Updated video import
import videoplayback from "../assets/videoplayback.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Incident
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Response
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Incident response is the process of identifying, managing, and mitigating security breaches or disruptions to minimize damage. EY helps organizations build robust incident response frameworks with expert-led teams and tested strategies. By leveraging cutting-edge technology and real-time intelligence, EY ensures swift detection and resolution of threats. Through regulatory guidance and stakeholder management, EY helps businesses maintain resilience and protect brand integrity.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a 
          href="https://www.ey.com/en_gl/services/assurance/crisis-management-incident-response-services"
          target="_blank" 
          rel="noopener noreferrer"
          className="py-3 px-4 mx-3 rounded-md border"
        >
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={vi1} type="video/mp4" /> {/* Updated video source */}
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={videoplayback} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;