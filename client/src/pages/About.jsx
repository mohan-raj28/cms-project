import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen bg-white text-gray-900 pt-0 pb-12 px-0 md:px-0 lg:px-0 flex items-start justify-center">
      <motion.div
        className="w-full max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <header className="mb-8 text-center mt-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-2">
            About Expense Tracker
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto inline-block">
            Gain complete control over your finances with our intuitive and easy-to-use web app.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">What is Expense Tracker?</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Expense Tracker is a powerful yet simple web application designed to help individuals
            and businesses keep track of their financial activities. From daily purchases to
            monthly budgets, it allows you to manage your finances efficiently through a clean,
            user-friendly interface.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-800 text-lg leading-relaxed space-y-2">
            <li>Sign up to create a secure account.</li>
            <li>Add your income and expenses with appropriate categories.</li>
            <li>Access real-time dashboards to view your financial summary.</li>
            <li>Use insights and visualizations to track your financial habits.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Benefits of Using Expense Tracker</h2>
          <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed space-y-2">
            <li>📊 Create smarter budgets and avoid overspending.</li>
            <li>🔐 Enjoy secure authentication and data encryption.</li>
            <li>⚡ Real-time updates for seamless experience.</li>
            <li>📱 Fully responsive — works great on mobile and desktop.</li>
            <li>🌱 Build healthy saving habits by identifying wasteful expenses.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-800 text-lg leading-relaxed space-y-2">
            <li>Easy-to-use interface for adding, editing, and deleting expenses and incomes.</li>
            <li>Customizable categories to organize your transactions.</li>
            <li>Visual charts and summaries to help you understand your spending patterns.</li>
            <li>Set monthly or custom budgets and track your progress in real time.</li>
            <li>Secure authentication and persistent storage for your data.</li>
            <li>Profile management to update your account information easily.</li>
            <li>Responsive design for seamless use on mobile, tablet, and desktop devices.</li>
            <li>Fast performance and modern design powered by React and Tailwind CSS.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Why Choose Expense Tracker?</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Expense Tracker is built for everyone—from students and families to freelancers and small business owners. Our goal is to make financial management accessible, transparent, and stress-free. With real-time updates, insightful analytics, and a focus on privacy, you can trust Expense Tracker to help you make smarter financial decisions every day.
          </p>
        </section>
      </motion.div>
    </section>
  );
}
