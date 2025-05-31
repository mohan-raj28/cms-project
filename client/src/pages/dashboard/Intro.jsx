import React, { useState } from "react";

export default function Intro({ theme = "light" }) {
    const [hovered, setHovered] = useState(false);

    const cardStyle = theme === "dark"
        ? "bg-gray-800 text-white shadow-black"
        : "bg-white text-gray-800 shadow-2xl";

    const titleColor = hovered ? "text-pink-600" : "text-blue-800";

    return (
        <div className="relative flex items-center justify-center min-h-[80vh] w-full bg-[url('/expbg.jpg')] bg-cover bg-center bg-no-repeat p-6 transition-all duration-500 overflow-hidden">
            {/* Overlay for gradient effect and readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-80 pointer-events-none select-none" style={{zIndex:1}} />
            {/* Cartoon background images */}
            <img src="/exbg1.jpg" alt="Cartoon Plant" className="absolute left-0 bottom-0 w-32 opacity-30 pointer-events-none select-none" style={{zIndex:2}} />
            <img src="/expense tracker.png" alt="Cartoon Wallet" className="absolute right-0 top-0 w-28 opacity-20 pointer-events-none select-none" style={{zIndex:2}} />
            {/* Main Card */}
            <div className={`relative z-10 max-w-6xl w-full ${cardStyle} bg-opacity-95 rounded-3xl overflow-hidden p-4 transition-shadow duration-300 bg-[url('/expbg.jpg')] bg-cover bg-center bg-no-repeat`}> 
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 pointer-events-none" style={{zIndex:1}} />
                <div className="flex flex-col lg:flex-row relative z-10">

                    {/* Left Side - Image and Title */}
                    <div
                        className="flex flex-col items-center justify-center text-center p-8 lg:w-1/2"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <img src="/expense tracker.png" alt="Expense Tracker" className="w-40 h-40 mb-6 rounded-full shadow-xl border-4 border-blue-200" />
                        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 tracking-tight drop-shadow-lg transition-colors duration-300">
                            Expense Tracker App
                        </h1>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80 rounded-xl px-6 py-3 mt-2 shadow-md border-2 border-blue-200 dark:border-blue-700 animate-fade-in transition-all duration-300">
                            Manage your personal finances with ease. <span className="text-pink-600 font-bold">Track</span>, <span className="text-blue-600 font-bold">analyze</span>, and <span className="text-purple-600 font-bold">take control</span> of your financial future in style.
                        </p>
                    </div>

                    {/* Right Side - Details */}
                    <div className="lg:w-1/2 p-8 space-y-8">
                        {/* Key Features */}
                        {/* About Project */}
                        {/* How to Use */}
                        {/* All same as your original - unchanged */}
                    </div>
                </div>

                {/* Footer CTA */}
                <div className="text-center mt-10">
                    <span className="inline-block bg-gradient-to-r from-yellow-200 via-pink-300 to-orange-300 text-yellow-700 px-12 py-5 rounded-full font-black shadow-yellow-300 shadow-2xl text-2xl hover:scale-110 transition-transform duration-300 border-4 border-yellow-300 animate-pulse drop-shadow-xl">
                        Happy Tracking!
                    </span>
                </div>
            </div>
        </div>
    );
}
