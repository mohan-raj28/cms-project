import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import AuthContext from '../context/AuthContext';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { register } = useContext(AuthContext);
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		register(email, password);
		navigate('/dashboard/display');
	}

	return (
		<section className="fixed inset-0 flex items-center justify-center bg-white">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className="relative z-10 w-full max-w-md px-6"
			>
				<form
					onSubmit={handleSubmit}
					className="bg-white/90 p-10 rounded-3xl shadow-xl border border-emerald-300 backdrop-blur-md flex flex-col gap-6 transition-all duration-300 hover:shadow-2xl"
				>
					<div className="flex flex-col items-center mb-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-14 w-14 mb-2 text-emerald-400 drop-shadow"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<h2 className="text-3xl font-bold text-emerald-800 drop-shadow-sm">
							Create Account
						</h2>
						<p className="text-sm text-emerald-600">
							Sign up to start managing your expenses
						</p>
					</div>

					<div className="relative">
						<input
							id="email"
							type="email"
							name="username"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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
							onChange={(e) => setPassword(e.target.value)}
							required
							className="peer w-full px-5 py-3 pl-12 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-emerald-50 placeholder-teal-400"
							placeholder="Password"
							autoComplete="new-password"
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
						Create New Account
					</motion.button>
    <div className="mt-6 text-center text-sm text-gray-500">
					Already have an account?{' '}
					<a href="/login" className="text-blue-600 hover:underline">
						Sign in
					</a>
				</div>
				</form>
			</motion.div>
      
		</section>
	);
}