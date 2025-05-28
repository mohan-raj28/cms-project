import { Link } from "react-router";
export default function Home() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
        <div className="text-gray-900 text-4xl font-extrabold mb-3 drop-shadow">
          Expense Tracker
        </div>
        <div className="text-gray-600 text-lg mb-8 text-center max-w-md">
          Take control of your finances! Track your expenses, set budgets, and
          visualize your spending habits—all in one place.
        </div>
        <Link
          to={'/login'}
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl shadow-lg text-lg font-semibold transition duration-300"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}