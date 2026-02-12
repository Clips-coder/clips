"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Zap, DollarSign, Plus, Minus, Instagram, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqData = [
    {
      question: "How quickly do I get paid?",
      answer: "You can get paid as soon as your content is approved by a brand and starts earning views. Earnings update automatically, and once you hit the minimum payout amount, you can choose to cash out right away. No waiting weeks and no chasing payments."
    },
    {
      question: "Do I need a minimum follower count?",
      answer: "No minimum follower count is required. Anyone can participate, and performance matters more than audience size. If your clip gets views, it earns."
    },
    {
      question: "What follower count do clippers have and where are they based?",
      answer: "Clippers have a wide range of follower counts, from a few hundred followers to a few million. They're based all over the world, and brands can choose where they want a clipper's main audience to be located to better match their target market."
    },
    {
      question: "How does Clippable differ from other UGC marketplaces?",
      answer: "Unlike traditional UGC platforms that require applications or follower minimums, Clippable is open to everyone. Any creator can instantly browse and submit clips to live campaigns, brands approve the clips they want, and creators earn based on real views."
    },
    {
      question: "How does the creator vetting process work?",
      answer: "Clippable does not require a traditional application or upfront vetting to participate. Any creator can submit clips to campaigns, but brands approve which clips are used. Clips are monitored for authenticity, and clippers who fake views or manipulate engagement are removed from the platform."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className={`mx-auto transition-all duration-300 ${
          isScrolled 
            ? 'max-w-4xl px-4' 
            : 'max-w-7xl px-6'
        }`}>
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? 'bg-gray-800/90 backdrop-blur-md rounded-full px-6 py-3 border border-gray-700' 
              : ''
          }`}>
            {/* Logo */}
            <div className={`flex items-center gap-2 transition-all duration-300 ${
              isScrolled 
                ? 'gap-1.5 flex-shrink-0' 
                : 'gap-2'
            }`}>
              <div className={`bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'w-6 h-6' : 'w-8 h-8'
              }`}>
                <div className={`border-2 border-white rounded-sm transform rotate-45 transition-all duration-300 ${
                  isScrolled ? 'w-3 h-3' : 'w-5 h-5'
                }`}></div>
              </div>
              <span className={`font-semibold text-white transition-all duration-300 ${
                isScrolled ? 'text-base' : 'text-xl'
              }`}>Clippable</span>
            </div>

            {/* Navigation - Center - Ne bouge pas */}
            <nav className={`hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
              isScrolled ? 'gap-4' : 'gap-8'
            }`}>
              <a href="#" className={`text-gray-400 hover:text-white transition-colors ${
                isScrolled ? 'text-sm' : ''
              }`}>For Creators</a>
              <a href="#" className={`text-gray-400 hover:text-white transition-colors ${
                isScrolled ? 'text-sm' : ''
              }`}>For Brands</a>
            </nav>

            {/* Actions - Right */}
            <div className={`flex items-center transition-all duration-300 flex-shrink-0 ${
              isScrolled ? 'gap-2' : 'gap-3'
            }`}>
              <button className={`bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 ${
                isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
              }`}>Log In</button>
              <button className={`bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 ${
                isScrolled ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
              }`}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-0 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Turn Views Into Revenue
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the modern clipping marketplace connecting creators and brands. Earn money by posting content, or launch campaigns to reach millions.
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <Button size="lg">Start as Creator</Button>
            <Button variant="outline" size="lg">Launch a Campaign</Button>
          </div>
        </div>
      </section>

      {/* Video Slider */}
      <section className="pt-8 pb-8 px-6">
        <div className="w-full flex justify-center">
          <div className="w-[520px] overflow-hidden relative">
              {/* Fade gradients on sides */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex gap-4 animate-scroll-right">
                {/* Video 1 - Partially visible left with fade */}
                <div className="min-w-[200px] h-[300px] rounded-xl overflow-hidden flex-shrink-0 relative opacity-90">
                  <img
                    src="https://picsum.photos/200/300?random=1"
                    alt="Video 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 to-transparent pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950/95 to-transparent pointer-events-none"></div>
                </div>

                {/* Video 2 - Fully visible center */}
                <div className="min-w-[200px] h-[300px] rounded-xl overflow-hidden flex-shrink-0 relative shadow-xl">
                  <img
                    src="https://picsum.photos/200/300?random=2"
                    alt="Video 2"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Video 3 - Partially visible right with fade */}
                <div className="min-w-[200px] h-[300px] rounded-xl overflow-hidden flex-shrink-0 relative opacity-90">
                  <img
                    src="https://picsum.photos/200/300?random=3"
                    alt="Video 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-gray-950/90 to-transparent pointer-events-none"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950/95 to-transparent pointer-events-none"></div>
                </div>

                {/* Duplicate set for seamless scroll */}
                <div className="min-w-[200px] h-[300px] rounded-xl overflow-hidden flex-shrink-0 relative opacity-90">
                  <img
                    src="https://picsum.photos/200/300?random=1"
                    alt="Video 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 to-transparent pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950/95 to-transparent pointer-events-none"></div>
                </div>

                <div className="min-w-[200px] h-[300px] rounded-xl overflow-hidden flex-shrink-0 relative shadow-xl">
                  <img
                    src="https://picsum.photos/200/300?random=2"
                    alt="Video 2"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="min-w-[200px] h-[300px] rounded-xl overflow-hidden flex-shrink-0 relative opacity-90">
                  <img
                    src="https://picsum.photos/200/300?random=3"
                    alt="Video 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-gray-950/90 to-transparent pointer-events-none"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950/95 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Trusted by the best - Logo Slider */}
      <section className="pt-8 pb-20 px-6 bg-gray-950">
        <div className="w-full flex justify-center">
          <div className="w-[520px] overflow-hidden">
            <h2 className="text-center text-gray-400 text-sm mb-10">Trusted by the best</h2>
            <div className="flex gap-16 items-center animate-scroll-logos">
              {/* Logo 1 */}
              <div className="flex-shrink-0 text-gray-400 text-sm font-semibold whitespace-nowrap">COLUMBIA</div>
              
              {/* Logo 2 */}
              <div className="flex-shrink-0 text-gray-400 text-sm font-semibold whitespace-nowrap">EPIC GAMES</div>
              
              {/* Logo 3 */}
              <div className="flex-shrink-0 text-gray-400 text-sm font-semibold whitespace-nowrap">Google</div>
              
              {/* Logo 4 */}
              <div className="flex-shrink-0 w-10 h-10 border border-gray-600 rounded flex items-center justify-center text-gray-400 text-xs">i</div>
              
              {/* Logo 5 */}
              <div className="flex-shrink-0 text-gray-400 text-xs font-semibold whitespace-nowrap">SATURDAY NIGHT LIVE</div>
              
              {/* Logo 6 */}
              <div className="flex-shrink-0 text-gray-400 text-sm font-semibold whitespace-nowrap">SONY</div>

              {/* Duplicate set for seamless scroll */}
              <div className="flex-shrink-0 text-gray-400 text-sm font-semibold whitespace-nowrap">COLUMBIA</div>
              <div className="flex-shrink-0 text-gray-400 text-sm font-semibold whitespace-nowrap">EPIC GAMES</div>
              <div className="flex-shrink-0 text-gray-400 text-sm font-semibold whitespace-nowrap">Google</div>
              <div className="flex-shrink-0 w-10 h-10 border border-gray-600 rounded flex items-center justify-center text-gray-400 text-xs">i</div>
              <div className="flex-shrink-0 text-gray-400 text-xs font-semibold whitespace-nowrap">SATURDAY NIGHT LIVE</div>
              <div className="flex-shrink-0 text-gray-400 text-sm font-semibold whitespace-nowrap">SONY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Welcome to the easiest way to make money on the internet.
            </h2>
            <p className="text-xl text-gray-400">
              Make money in under 10 clicks.
            </p>
          </div>

          {/* Features/Process Section - Two Columns */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  Brand launches campaign <ArrowRight className="w-6 h-6" />
                </h3>
                <p className="text-gray-400">
                  Upload content, set goals and pay structure. Distribution, tracking, and payouts are fully automated.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  Views are tracked <ArrowRight className="w-6 h-6" />
                </h3>
                <p className="text-gray-400">
                  The platform tracks views and engagement in real time. Brands only pay for results.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  Creators submit clips <ArrowRight className="w-6 h-6" />
                </h3>
                <p className="text-gray-400">
                  Creators browse campaigns and post content across TikTok, Instagram Reels, and YouTube Shorts.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  Creators get paid <ArrowRight className="w-6 h-6" />
                </h3>
                <p className="text-gray-400">
                  Earn $1.00 per 1,000 views ($100 per 100K views). No follower minimum required.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Section - Four Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+ Billion</div>
              <div className="text-gray-400 text-sm">Organic views generated.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400 text-sm">Campaigns launched.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">20K+</div>
              <div className="text-gray-400 text-sm">Clippers strong.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">93%</div>
              <div className="text-gray-400 text-sm">Of clippers make money within the first 24 hours.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Image */}
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/800/600?random=20"
                alt="Clippable Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Right Section - Text */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Clippable For Clippers</h2>
              
              <div className="flex gap-2 mb-8 flex-wrap">
                <span className="px-4 py-2 border border-purple-500 text-purple-400 rounded-full text-sm">No follower minimum</span>
                <span className="px-4 py-2 border border-purple-500 text-purple-400 rounded-full text-sm">Withdraw $ anytime</span>
                <span className="px-4 py-2 border border-purple-500 text-purple-400 rounded-full text-sm">Bonuses</span>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Earn Based on Performance:</h3>
                  <p className="text-gray-400">
                    You earn money based on views, not follower count. Anyone can participate and monetize their skills without needing a large audience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Get Paid Fast:</h3>
                  <p className="text-gray-400">
                    Request a payout whenever you want and get paid to your bank in less than a week. No minimum follower requirement to start earning.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-Time Analytics:</h3>
                  <p className="text-gray-400">
                    Track views and earnings in real time. Browse campaigns, submit clips, and watch your earnings grow as your content generates views.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Start Earning
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.67-1.09-.21-2.21-.51-3.52-.96-.44-.16-.9-.34-1.36-.51-.9-.33-1.81-.64-2.73-.96-.46-.16-.92-.32-1.36-.5-1.31-.45-2.43-.75-3.52-.96-1.03-.21-2.1-.28-3.08.67-.98.95-.88 2.05-.67 3.08.21 1.09.51 2.21.96 3.52.16.44.34.9.51 1.36.33.9.64 1.81.96 2.73.16.46.32.92.5 1.36.45 1.31.75 2.43.96 3.52.21 1.03.28 2.1-.67 3.08-.95.98-2.05.88-3.08.67-1.09-.21-2.21-.51-3.52-.96-.44-.16-.9-.34-1.36-.51-.9-.33-1.81-.64-2.73-.96-.46-.16-.92-.32-1.36-.5-1.31-.45-2.43-.75-3.52-.96-1.03-.21-2.1-.28-3.08.67-.98.95-.88 2.05-.67 3.08.21 1.09.51 2.21.96 3.52.16.44.34.9.51 1.36.33.9.64 1.81.96 2.73.16.46.32.92.5 1.36.45 1.31.75 2.43.96 3.52.21 1.03.28 2.1-.67 3.08z"/>
                  </svg>
                  Download iOS App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section - Text Left, Image Right */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Text */}
            <div>
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="px-4 py-2 border border-purple-500 text-purple-400 rounded-full text-sm">Real-time analytics</span>
                <span className="px-4 py-2 border border-purple-500 text-purple-400 rounded-full text-sm">20k+ creators</span>
                <span className="px-4 py-2 border border-purple-500 text-purple-400 rounded-full text-sm">Pay for results only</span>
              </div>

              <h2 className="text-4xl font-bold text-white mb-6">Clippable For Brands</h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Performance-Based Campaigns:</h3>
                  <p className="text-gray-400">
                    Set up campaigns with goals like views and engagement. You only pay for results, not impressions. Track performance in real time and optimize your campaigns based on data.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Distribute Everywhere:</h3>
                  <p className="text-gray-400">
                    Your content gets distributed across TikTok, Instagram Reels, and YouTube Shorts through thousands of creators. Maximize your reach and get your brand seen by millions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-Time Analytics:</h3>
                  <p className="text-gray-400">
                    Track your campaign performance, views, engagement, and creator performance all in one dashboard. Make data-driven decisions and see ROI in real time.
                  </p>
                </div>
              </div>

              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Go Viral Now
              </Button>
            </div>

            {/* Right Section - Image */}
            <div className="order-first lg:order-last">
              <img
                src="https://picsum.photos/800/600?random=21"
                alt="Clippable Analytics Dashboard"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-400 mb-2">FAQ</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
                >
                  <span className="text-white font-medium text-lg pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Boost Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to boost your social media impact?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and brands who are already using Clippable to grow their audience and increase engagement.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold px-8 py-4 text-base transition-all duration-200">
              Sign Up
            </button>
            <button className="bg-black border-2 border-white text-white rounded-full font-bold px-8 py-4 text-base hover:bg-gray-900 transition-all duration-200">
              Log In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Left Section - Clippable branding */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <div className="border-2 border-white rounded-sm transform rotate-45 w-5 h-5"></div>
                </div>
                <span className="text-xl font-bold text-white">Clippable</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Clippable is the number one short-form clipping marketplace where anyone can earn by posting online.
              </p>
              <div className="flex gap-4 mb-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
              </div>
              <p className="text-gray-500 text-xs">
                © Copyright 2026 Clippable Inc. All rights reserved.
              </p>
            </div>

            {/* Middle Section - Information */}
            <div>
              <h3 className="text-white font-bold mb-4">Information</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">White Labeling</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Launch a Campaign?</a>
                </li>
              </ul>
            </div>

            {/* Right Section - Legal */}
            <div>
              <h3 className="text-white font-bold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
