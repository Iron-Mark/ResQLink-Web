import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Smartphone,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Monitor,
} from "lucide-react";
import { AVAILABILITY, WEB_APP_URL } from "../utils/availability";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "AI-Powered Triage",
    description: "Smart disaster assessment and response coordination",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Offline-First",
    description: "Works even without an internet connection",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Real-Time Coordination",
    description: "Seamless multi-agency collaboration tools",
  },
];

export function AppAvailabilitySection() {
  return (
    <section
      id="availability"
      className="py-32 bg-gradient-to-br from-[#0a0a08] via-[#161613] to-[#1a1a17] relative"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-[#e0eaff] border-[#e0eaff]/30 backdrop-blur-sm px-6 py-3">
            <Smartphone className="h-4 w-4 mr-2" />
            Project Availability
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-[#fefdf5] mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-[#fefdf5] to-[#e0eaff] bg-clip-text text-transparent">
              Explore ResQLink
            </span>
          </h2>
          <p className="text-xl text-[#e0eaff]/70 max-w-3xl mx-auto leading-relaxed">
            {AVAILABILITY.androidDetail} Explore the portfolio demo to see the
            platform's response-coordination concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Availability and portfolio links */}
          <div className="text-center lg:text-left flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="p-6 bg-[#e0eaff]/5 border border-[#e0eaff]/20 rounded-xl">
                <h3 className="text-xl font-semibold text-[#fefdf5] mb-3">
                  {AVAILABILITY.android}
                </h3>
                <p className="text-[#e0eaff]/80 leading-relaxed">{AVAILABILITY.online}</p>
              </div>
              <Button
                asChild
                className="w-full bg-[#e0eaff]/10 hover:bg-[#e0eaff]/20 text-[#e0eaff] border border-[#e0eaff]/30 hover:border-[#e0eaff]/60 shadow-xl transition-all duration-300 px-12 py-6 text-lg rounded-xl font-semibold backdrop-blur-sm"
              >
                <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer">
                  <Monitor className="h-6 w-6 mr-3" />
                  Open Web App
                  <ArrowRight className="h-5 w-5 ml-3" />
                </a>
              </Button>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
                <a href="#dashboard">Explore Simulated Demo</a>
              </Button>
            </div>

            {/* Supporting text */}
            <p className="text-[#e0eaff]/80 text-lg leading-relaxed text-center">
              {AVAILABILITY.demo} For a real emergency, contact 911 or your local
              emergency responders.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[#fefdf5] mb-6">
                <span className="bg-gradient-to-r from-[#fefdf5] to-[#e0eaff] bg-clip-text text-transparent">
                  Platform Concepts
                </span>
              </h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-gradient-to-br from-[#e0eaff]/10 to-[#e0eaff]/5 backdrop-blur-sm border border-[#e0eaff]/20 rounded-2xl hover:border-[#e0eaff]/40 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-lg flex-shrink-0">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#fefdf5] mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-[#e0eaff]/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-br from-[#161613]/60 to-[#0a0a08]/40 backdrop-blur-sm border border-[#e0eaff]/20 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-[#fefdf5] mb-4 text-center">
                Our partners
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">2</div>
                  <div className="text-[#e0eaff]/70 text-sm">
                    Local Gov't Units
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    2
                  </div>
                  <div className="text-[#e0eaff]/70 text-sm">Academic Orgs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    1
                  </div>
                  <div className="text-[#e0eaff]/70 text-sm">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
