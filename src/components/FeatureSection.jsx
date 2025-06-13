const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        NIST
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          Cybersecurity Framework
        </span>
      </h2>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        The NIST Cybersecurity Framework (CSF) is a comprehensive guideline developed to help organizations identify, protect, detect, respond to, and recover from cybersecurity threats. It provides a structured approach to managing and mitigating cyber risks, ensuring resilience against cyberattacks.
      </p>
      <p className="mt-4 text-lg text-center text-neutral-500 max-w-4xl">
        The framework consists of five core functions that act as a foundation for any organization's cybersecurity strategy:
      </p>

      <ul className="mt-6 text-lg text-left text-neutral-500 max-w-4xl space-y-4">
        <li><span className="text-orange-500 font-semibold">➜ Identify:</span> Understand risks to systems, assets, and data.</li>
        <li><span className="text-orange-500 font-semibold">➜ Protect:</span> Implement safeguards to ensure security.</li>
        <li><span className="text-orange-500 font-semibold">➜ Detect:</span> Identify cybersecurity threats in real-time.</li>
        <li><span className="text-orange-500 font-semibold">➜ Respond:</span> Take immediate action against cyber incidents.</li>
        <li><span className="text-orange-500 font-semibold">➜ Recover:</span> Restore operations and improve resilience.</li>
      </ul>
    </div>
  );
};

export default FeatureSection;