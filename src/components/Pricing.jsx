import { useState } from "react";
import { ChevronDown, Shield, Users, BookOpen, MessageCircle } from "lucide-react";

const Pricing = () => {
  const [showRolesDropdown, setShowRolesDropdown] = useState(false);
  const [showPlaybookDropdown, setShowPlaybookDropdown] = useState(false);

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide text-orange-400">
        COMPONENTS
      </h2>
      <div className="space-y-6">
        {/* Incident Response */}
        <div className="w-full p-2">
          <div className="p-10 border border-neutral-700 rounded-xl bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 hover:from-neutral-800/60 hover:to-neutral-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="flex items-center gap-10">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 p-8 rounded-full shadow-2xl">
                    <Shield className="w-20 h-20 text-white drop-shadow-2xl" />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-4xl mb-6 font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Incident Response
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed mb-4 text-justify">
                  A comprehensive, structured approach to handling cybersecurity incidents effectively. This framework ensures rapid detection, containment, and recovery while minimizing business impact and protecting critical assets.
                </p>
                <p className="text-base text-neutral-400 leading-relaxed text-justify">
                  Our incident response methodology follows industry best practices including preparation, identification, containment, eradication, recovery, and lessons learned phases. Each phase is designed to maintain business continuity while strengthening security posture.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Roles Section with Dropdown */}
        <div className="w-full p-2">
          <div className="p-10 border border-neutral-700 rounded-xl bg-gradient-to-l from-neutral-900/50 to-neutral-800/30 hover:from-neutral-800/60 hover:to-neutral-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="flex items-center gap-10">
              <div className="flex-1 min-w-0">
                <p className="text-4xl mb-6 font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Roles
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed mb-4 text-justify">
                  Defines key stakeholder roles and responsibilities in incident response including{" "}
                  <span className="text-orange-500 font-semibold">CFO</span>,{" "}
                  <span className="text-orange-500 font-semibold">Governance</span>, and cross-functional teams.
                </p>
                <p className="text-base text-neutral-400 leading-relaxed mb-6 text-justify">
                  Each role has specific duties, escalation procedures, and communication protocols to ensure coordinated response efforts. Clear role definition prevents confusion during high-stress incidents and enables efficient decision-making across organizational hierarchies.
                </p>
                <button
                  className="flex items-center text-xl text-orange-500 hover:text-orange-400 transition-all duration-200 font-semibold hover:scale-105"
                  onClick={() => setShowRolesDropdown(!showRolesDropdown)}
                >
                  View Roles <ChevronDown className="ml-2 transition-transform duration-200" />
                </button>
                {showRolesDropdown && (
                  <ul className="mt-6 p-6 border border-neutral-600 rounded-lg bg-neutral-800/60 backdrop-blur-sm shadow-xl">
                    <li className="py-3 border-b border-neutral-700 last:border-b-0">
                      <a
                        href="https://cfo-webpage-67mi4klpn-kp0702s-projects.vercel.app"
                        className="text-orange-500 hover:text-orange-400 hover:underline transition-colors duration-200 font-semibold text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CFO
                      </a>
                      <p className="text-neutral-300 mt-1 text-justify">Manages financial risks, budget allocation, and cost-benefit analysis of security investments during incidents.</p>
                    </li>
                    <li className="py-3 border-b border-neutral-700 last:border-b-0">
                      <a
                        href="https://gov-webpage-khnpeezg0-kp0702s-projects.vercel.app/"
                        className="text-orange-500 hover:text-orange-400 hover:underline transition-colors duration-200 font-semibold text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Governance
                      </a>
                      <p className="text-neutral-300 mt-1 text-justify">Ensures regulatory compliance, oversees risk management protocols, and maintains audit trails throughout the incident lifecycle.</p>
                    </li>
                    <li className="py-3 border-b border-neutral-700 last:border-b-0">
                      <a
                        href="https://it-webpage-4619l86cf-kp0702s-projects.vercel.app"
                        className="text-orange-500 hover:text-orange-400 hover:underline transition-colors duration-200 font-semibold text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        IT System
                      </a>
                      <p className="text-neutral-300 mt-1 text-justify">Manages technical infrastructure, system recovery operations, and coordinates with vendors for rapid restoration of services.</p>
                    </li>
                    <li className="py-3 border-b border-neutral-700 last:border-b-0">
                      <a
                        href="https://legal-webpage-3mxhq9q0o-kp0702s-projects.vercel.app"
                        className="text-orange-500 hover:text-orange-400 hover:underline transition-colors duration-200 font-semibold text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Legal Division
                      </a>
                      <p className="text-neutral-300 mt-1 text-justify">Provides legal counsel, manages regulatory notifications, and handles potential litigation related to security incidents.</p>
                    </li>
                    <li className="py-3 border-b border-neutral-700 last:border-b-0">
                      <a
                        href="https://manage-webpage-m31dyh55a-kp0702s-projects.vercel.app"
                        className="text-orange-500 hover:text-orange-400 hover:underline transition-colors duration-200 font-semibold text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Marketing
                      </a>
                      <p className="text-neutral-300 mt-1 text-justify">Handles external communications, manages public relations, and protects brand reputation during security incidents.</p>
                    </li>
                    <li className="py-3 border-b border-neutral-700 last:border-b-0">
                      <a
                        href="https://sec-page-juusn8n84-kp0702s-projects.vercel.app"
                        className="text-orange-500 hover:text-orange-400 hover:underline transition-colors duration-200 font-semibold text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Security
                      </a>
                      <p className="text-neutral-300 mt-1 text-justify">Leads incident investigation, implements security controls, and coordinates threat intelligence gathering and analysis.</p>
                    </li>
                    <li className="py-3 border-b border-neutral-700 last:border-b-0">
                      <a
                        href="https://vendor-webpage-8rzp0f8qz-kp0702s-projects.vercel.app"
                        className="text-orange-500 hover:text-orange-400 hover:underline transition-colors duration-200 font-semibold text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vendor Manager
                      </a>
                      <p className="text-neutral-300 mt-1 text-justify">Coordinates with third-party vendors, manages service level agreements, and ensures external support during incidents.</p>
                    </li>
                  </ul>
                )}
              </div>
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 p-8 rounded-full shadow-2xl">
                    <Users className="w-20 h-20 text-white drop-shadow-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Playbook Scenario Section with Dropdown */}
        <div className="w-full p-2">
          <div className="p-10 border border-neutral-700 rounded-xl bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 hover:from-neutral-800/60 hover:to-neutral-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="flex items-center gap-10">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 p-8 rounded-full shadow-2xl">
                    <BookOpen className="w-20 h-20 text-white drop-shadow-2xl" />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-4xl mb-6 font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Playbook Scenario
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed mb-4 text-justify">
                  Comprehensive, predefined action plans and response procedures for various cybersecurity threats and attack vectors. Each playbook provides step-by-step guidance for effective incident resolution.
                </p>
                <p className="text-base text-neutral-400 leading-relaxed mb-6 text-justify">
                  Our playbooks are continuously updated based on threat intelligence, industry trends, and lessons learned from previous incidents. They include technical procedures, communication templates, and decision trees to ensure consistent and effective responses across all threat scenarios.
                </p>
                <button
                  className="flex items-center text-xl text-orange-500 hover:text-orange-400 transition-all duration-200 font-semibold hover:scale-105"
                  onClick={() => setShowPlaybookDropdown(!showPlaybookDropdown)}
                >
                  View Scenarios <ChevronDown className="ml-2 transition-transform duration-200" />
                </button>
                {showPlaybookDropdown && (
                  <ul className="mt-6 p-6 border border-neutral-600 rounded-lg bg-neutral-800/60 backdrop-blur-sm shadow-xl">
                    <li className="py-3 border-b border-neutral-700 last:border-b-0">
                      <a
                        href="https://ddos-webpage-5vz4prv1j-kp0702s-projects.vercel.app"
                        className="text-orange-500 hover:text-orange-400 hover:underline transition-colors duration-200 font-semibold text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DDoS Attacks
                      </a>
                      <p className="text-neutral-300 mt-1 text-justify">Advanced mitigation strategies for distributed denial-of-service attacks including traffic analysis, rate limiting, and CDN deployment.</p>
                    </li>
                    <li className="py-3 border-b border-neutral-700 last:border-b-0">
                      <a
                        href="https://ransomware-webpage-3eppuxoxv-kp0702s-projects.vercel.app"
                        className="text-orange-500 hover:text-orange-400 hover:underline transition-colors duration-200 font-semibold text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ransomware
                      </a>
                      <p className="text-neutral-300 mt-1 text-justify">Comprehensive containment and recovery procedures for ransomware incidents including network isolation, backup restoration, and negotiation strategies.</p>
                    </li>
                    <li className="py-3 border-b border-neutral-700 last:border-b-0">
                      <span className="text-orange-500 font-semibold text-lg">Malware Infections</span>
                      <p className="text-neutral-300 mt-1 text-justify">Detailed guidelines for detecting, analyzing, and removing various malware types including trojans, rootkits, and advanced persistent threats.</p>
                    </li>
                    <li className="py-3 border-b border-neutral-700 last:border-b-0">
                      <span className="text-orange-500 font-semibold text-lg">Phishing Campaigns</span>
                      <p className="text-neutral-300 mt-1 text-justify">Best practices for identifying, reporting, and preventing phishing attacks including email security, user training, and threat intelligence integration.</p>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabletop Exercise */}
        <div className="w-full p-2">
          <div className="p-10 border border-neutral-700 rounded-xl bg-gradient-to-l from-neutral-900/50 to-neutral-800/30 hover:from-neutral-800/60 hover:to-neutral-700/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="flex items-center gap-10">
              <div className="flex-1 min-w-0">
                <p className="text-4xl mb-6 font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  Tabletop Exercise
                </p>
                <p className="text-lg text-neutral-300 leading-relaxed mb-4 text-justify">
                  Interactive, discussion-based simulation exercises designed to evaluate and improve an organization's cybersecurity incident response capabilities in a controlled environment.
                </p>
                <p className="text-base text-neutral-400 leading-relaxed text-justify">
                  These exercises bring together key stakeholders to walk through realistic attack scenarios, test communication protocols, and identify gaps in response procedures. Regular tabletop exercises help teams practice decision-making under pressure and refine incident response plans based on practical insights and emerging threats.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 p-8 rounded-full shadow-2xl">
                    <MessageCircle className="w-20 h-20 text-white drop-shadow-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;