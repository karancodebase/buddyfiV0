import { Award, BarChart3, Calendar, Code, Github, Globe, MessageSquare, Rocket, Search, Shield, Target, UserCheck, Users, Zap } from "lucide-react";
import React from "react";

const Working = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-center md:text-6xl text-4xl font-bold">
          How <span className="text-green-400/90">BuddyFi</span> Works
        </h1>
        <p className="md:max-w-[60vw] text-center mx-auto md:text-xl mt-4">
          The magic happens in three simple steps, but each step is powered by
          sophisticated technology working behind the scenes to ensure perfect
          matches and seamless collaboration.
        </p>
      </div>
      <div className="py-10 flex justify-center lg:px-50 px-5">
      <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 lg:gap-12 gap-6 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 md:p-8 p-4 rounded-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="lg:w-12 w-8 lg:h-12 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="lg:text-xl font-bold">1</span>
                      </div>
                      <h3 className="lg:text-2xl text-xl font-bold">Create Your On-Chain Profile</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Connect your wallet and let BuddyFi analyze your on-chain activity, GitHub contributions, and
                      project history. Our AI creates a comprehensive skill profile that&apos;s impossible to fake.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Github className="text-gray-400" size={16} />
                        <span className="text-sm">GitHub integration & contribution analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="text-gray-400" size={16} />
                        <span className="text-sm">On-chain credential verification</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="text-gray-400" size={16} />
                        <span className="text-sm">Skill assessments & certifications</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Rocket className="text-gray-400" size={16} />
                        <span className="text-sm">Project portfolio showcase</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl h-80 flex items-center justify-center">
                    <div className="text-center">
                      <UserCheck className="text-blue-400 mx-auto mb-4" size={64} />
                      <p className="text-gray-300">Profile Creation Interface</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl h-80 flex items-center justify-center">
                    <div className="text-center">
                      <Search className="text-purple-400 mx-auto mb-4" size={64} />
                      <p className="text-gray-300">Skill-Based Matching</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Discover Perfect Teammates</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Our intelligent matching algorithm analyzes your project needs and suggests developers with
                      complementary skills. Swipe through profiles, review portfolios, and connect with your ideal
                      teammates.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Zap className="text-gray-400" size={16} />
                        <span className="text-sm">AI-powered skill compatibility analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Target className="text-gray-400" size={16} />
                        <span className="text-sm">Project-specific team recommendations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BarChart3 className="text-gray-400" size={16} />
                        <span className="text-sm">Experience level matching</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="text-gray-400" size={16} />
                        <span className="text-sm">Timezone & availability alignment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Collaborate & Build</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Once your team is formed, access integrated collaboration tools, project management features, and
                      real-time communication channels. Everything you need to build amazing projects together.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="text-gray-400" size={16} />
                        <span className="text-sm">Integrated team chat & video calls</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="text-gray-400" size={16} />
                        <span className="text-sm">Project timeline & milestone tracking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Code className="text-gray-400" size={16} />
                        <span className="text-sm">Code collaboration & review tools</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="text-gray-400" size={16} />
                        <span className="text-sm">Achievement tracking & team reputation</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-md border border-white/10 p-8 rounded-2xl h-80 flex items-center justify-center">
                    <div className="text-center">
                      <Users className="text-green-400 mx-auto mb-4" size={64} />
                      <p className="text-gray-300">Team Collaboration Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>

      <div className="flex justify-center">
        <div className="glass-morphism lg:max-w-[50vw] mx-2 text-center py-6 md:px-10 px-6 mt-10">
          <p className="text-neutral-50 md:text-2xl text-xl mb-4 font-semibold">
            Real Results from Real Teams
          </p>
          <div className="flex md:flex-row flex-col md:gap-6 gap-4 py-6 justify-between">
            <div>
              <p className="md:pb-4 pb-2 text-4xl font-semibold text-blue-400">
                89%
              </p>
              <div className="md:text-md text-sm">
                <p>Team Compatibility Score</p>
                <p className="text-neutral-500">vs 23% random teams</p>
              </div>
            </div>
            <div>
              <p className="md:pb-4 pb-2 text-4xl font-semibold text-cyan-400">
                3.2x
              </p>
              <div className="md:text-md text-sm">
                <p>Faster Project Completion</p>
                <p className="text-neutral-500">Less time teaching basics</p>
              </div>
            </div>
            <div>
              <p className="md:pb-4 pb-2 text-4xl font-semibold text-purple-400">
                73%
              </p>
              <div className="md:text-md text-sm">
                <p>Higher Win Rate</p>
                <p className="text-neutral-500">In competitive hackathons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
