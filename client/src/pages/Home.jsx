import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      className="fixed inset-0 w-screen h-screen min-h-screen grid grid-cols-1 md:grid-cols-2 bg-cover bg-center overflow-hidden pt-16"
      style={{ backgroundImage: "url('/expbg.jpg')" }}
    >
      {/* Overlay for better image visibility */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      {/* Left Section */}
      <div className="bg-white/70 flex flex-col justify-center px-4 py-20 md:px-8 md:py-0 z-10 min-h-screen">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 text-center">
          Track Your <span className="text-teal-600">Expenses</span> With Ease
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-4 max-w-lg mx-auto text-center">
          Expense Tracker helps you take full control of your finances by
          allowing you to effortlessly log expenses, set and stick to your
          budgets, and visualize your spending habits with intuitive charts.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-6 max-w-lg mx-auto text-center">
          Whether you're managing personal expenses, saving for a goal, or
          simply curious about where your money goes, our app provides the tools
          to help you stay on track and make informed financial decisions.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <Link
            to="/login"
            className="bg-teal-600 hover:bg-teal-700 text-white text-base font-medium py-2 px-5 rounded-xl shadow-sm transition duration-300 w-max"
          >
            Get Started
          </Link>
          <Link
            to="/About"
            className="bg-teal-600 hover:bg-teal-700 text-white text-base font-medium py-2 px-5 rounded-xl shadow-sm transition duration-300 w-max"
          >
            Learn More
          </Link>
        </div>
      </div>
      {/* Right Section - Illustration */}
      <div className="flex items-center justify-center p-8 bg-white/70 z-10 min-h-screen">
        <div className="w-full max-w-md">
          {/* Optionally add an illustration here */}
        </div>
      </div>
    </section>
  );
}
