import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Zap, DollarSign } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-xl font-semibold text-white">Clippable</span>
          </div>

          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">For Creators</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">For Brands</a>
          </nav>

          {/* Actions - Right */}
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">Log In</button>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Sign Up
            </button>
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
      <section className="pt-8 pb-6 px-6">
        <div className="w-full flex justify-center">
          <div className="w-[520px] overflow-hidden relative">
              {/* Fade gradients on sides */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex gap-4 animate-scroll-right">
                {/* Video 1 - Partially visible left with fade */}
                <div className="min-w-[300px] h-[450px] rounded-xl overflow-hidden flex-shrink-0 relative opacity-60">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=0&mute=1&loop=1&playlist=dQw4w9WgXcQ"
                    title="Video 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950/90 to-transparent pointer-events-none"></div>
                </div>

                {/* Video 2 - Fully visible */}
                <div className="min-w-[240px] h-[360px] rounded-xl overflow-hidden flex-shrink-0 relative shadow-xl">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/jNQXAC9IVRw?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=0&mute=1&loop=1&playlist=jNQXAC9IVRw"
                    title="Video 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video 3 - Fully visible */}
                <div className="min-w-[240px] h-[360px] rounded-xl overflow-hidden flex-shrink-0 relative shadow-xl">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/9bZkp7q19f0?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=0&mute=1&loop=1&playlist=9bZkp7q19f0"
                    title="Video 3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video 4 - Partially visible right with fade */}
                <div className="min-w-[240px] h-[360px] rounded-xl overflow-hidden flex-shrink-0 relative opacity-60">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/kJQP7kiw5Fk?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=0&mute=1&loop=1&playlist=kJQP7kiw5Fk"
                    title="Video 4"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950/90 to-transparent pointer-events-none"></div>
                </div>

                {/* Duplicate set for seamless scroll */}
                <div className="min-w-[300px] h-[450px] rounded-xl overflow-hidden flex-shrink-0 relative opacity-60">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=0&mute=1&loop=1&playlist=dQw4w9WgXcQ"
                    title="Video 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950/90 to-transparent pointer-events-none"></div>
                </div>

                <div className="min-w-[240px] h-[360px] rounded-xl overflow-hidden flex-shrink-0 relative shadow-xl">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/jNQXAC9IVRw?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=0&mute=1&loop=1&playlist=jNQXAC9IVRw"
                    title="Video 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="min-w-[240px] h-[360px] rounded-xl overflow-hidden flex-shrink-0 relative shadow-xl">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/9bZkp7q19f0?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=0&mute=1&loop=1&playlist=9bZkp7q19f0"
                    title="Video 3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="min-w-[240px] h-[360px] rounded-xl overflow-hidden flex-shrink-0 relative opacity-60">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/kJQP7kiw5Fk?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=0&mute=1&loop=1&playlist=kJQP7kiw5Fk"
                    title="Video 4"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950/90 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Earnings Example */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Earn Based on Performance</h2>
          <p className="text-xl text-gray-400 mb-8">
            $0.5 per 1,000 views. No follower minimum required.
          </p>
          <Card>
            <CardContent className="p-8">
              <div className="text-5xl font-bold mb-2">$500</div>
              <div className="text-gray-400">for 1M views</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of creators earning on Clips
          </p>
          <Button size="lg">
            Get Started <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          © 2026 Clips. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
