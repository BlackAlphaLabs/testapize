import React from 'react';
import { ArrowRight } from 'lucide-react';
import sitelogo from '../assets/FullLogo.png'; // adjust path as needed

const HomePage = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 
            bg-gradient-to-tr from-[#0d0b1f] via-[#15132c] to-[#1c1a3d] text-white overflow-hidden">

            {/* Small scattered animated dots */}
            {[...Array(40)].map((_, i) => (
                <div
                    key={i}
                    className={`absolute w-[2px] h-[2px] rounded-full bg-white/30 animate-pulse`}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                />
            ))}

            {/* Main content */}
            <div className="relative z-10 max-w-4xl w-full flex flex-col items-center space-y-8 py-20">

                {/* Logo with float animation */}
                <img
                    src={sitelogo}
                    alt="TestAPIze Logo"
                    className="w-28 md:w-36 object-contain drop-shadow-[0_0_20px_rgba(200,80,242,0.6)] 
                    animate-[float_4s_ease-in-out_infinite]"
                />

                {/* Gradient heading */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide 
                    bg-gradient-to-r from-[#c850f2] via-purple-400 to-cyan-400
                    bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(200,80,242,0.6)]
                    animate-[fadeup_1s_ease-out]"
                >
                    Meet TestAPIze
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80
                    animate-[fadeup_1s_0.3s_ease-out]"
                    style={{ animationDelay: '0.5s' }}
                >
                    The next-generation API testing tool built with Electron, Vite & Tailwind.
                    Test your APIs faster, easier, and in style.
                </p>

                {/* Call to action buttons */}
                <div className="flex justify-center gap-6 mt-6 flex-wrap
                    animate-[fadeup_1s_0.6s_ease-out]"
                    style={{ animationDelay: '0.8s' }}
                >
                    <a
                        href="#get-started"
                        className="px-8 py-3 rounded-full font-semibold text-white
                            border border-[#c850f2] hover:bg-[#c850f2] hover:text-[#0d0b1f]
                            shadow-[0_0_12px_rgba(200,80,242,0.5)]
                            transition duration-300 ease-out"
                    >
                        Get Started <ArrowRight size={18} className="inline ml-2" />
                    </a>
                    <a
                        href="#learn-more"
                        className="px-8 py-3 rounded-full font-semibold text-white
                            border border-cyan-400 hover:bg-cyan-400 hover:text-[#0d0b1f]
                            shadow-[0_0_12px_rgba(34,211,238,0.5)]
                            transition duration-300 ease-out"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            {/* Subtle fade at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0d0b1f] to-transparent"></div>

            {/* Tailwind custom animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes fadeup {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default HomePage;
