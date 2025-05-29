import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    login(email, password);
  }

  return (
    <section
      className="fixed inset-0 w-screen h-screen min-h-screen grid grid-cols-1 md:grid-cols-2 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/lgbg1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', imageRendering: 'auto' }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md px-6 col-span-1 flex items-center justify-center md:justify-start md:pl-16"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 p-10 rounded-3xl shadow-xl border border-emerald-300 backdrop-blur-md flex flex-col gap-6 transition-all duration-300 hover:shadow-2xl"
        >
          <div className="flex flex-col items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mb-2 text-emerald-400 drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17v2m0 0a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2a2 2 0 012-2h4a2 2 0 012 2zm0 0v-2m0 0a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2z" />
            </svg>
            <h2 className="text-3xl font-bold text-emerald-800 drop-shadow-sm">Welcome Back</h2>
            <p className="text-sm text-emerald-600">Log in to access your account</p>
          </div>

          <div className="relative">
            <input
              id="email"
              type="email"
              name="username"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="peer w-full px-5 py-3 pl-12 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-emerald-50 placeholder-teal-400"
              placeholder="Email"
              autoComplete="username"
            />
            <span className="absolute left-4 top-3 text-emerald-300">
              📧
            </span>
          </div>

          <div className="relative">
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="peer w-full px-5 py-3 pl-12 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-emerald-50 placeholder-teal-400"
              placeholder="Password"
              autoComplete="current-password"
            />
            <span className="absolute left-4 top-3 text-emerald-300">
              🔒
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 text-teal-900 py-3 rounded-xl font-bold text-lg shadow-lg tracking-wide transition-colors hover:from-emerald-500 hover:to-teal-200"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
      {/* Optionally, add an empty div for the right side to keep layout */}
      <div className="hidden md:block col-span-1" />
    </section>
  );
}
