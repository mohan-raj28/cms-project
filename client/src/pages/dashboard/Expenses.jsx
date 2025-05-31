import React, { useState, useEffect } from "react";
import storageService from "../../service/storageService";

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({
    description: "",
    amount: "",
    date: ""
  });

  // Load expenses from storage on mount
  useEffect(() => {
    const stored = storageService.getItem("expenses");
    setExpenses(Array.isArray(stored) ? stored : []);
  }, []);

  // Save expenses to storage whenever they change
  useEffect(() => {
    storageService.setItem("expenses", expenses);
  }, [expenses]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.description || !form.amount || !form.date) return;
    setExpenses([
      ...expenses,
      {
        id: Date.now(),
        ...form
      }
    ]);
    setForm({ description: "", amount: "", date: "" });
  }

  function handleDelete(id) {
    setExpenses(expenses.filter(exp => exp.id !== id));
  }

  const total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);

  return (
    <div className="relative max-w-2xl mx-auto p-8 bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 rounded-3xl shadow-2xl shadow-blue-200/40 mt-10 border-2 border-blue-200 animate-fade-in-up transition-all duration-200 hover:shadow-pink-200 hover:scale-[1.02] overflow-hidden">
      <h2 className="relative z-10 text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow animate-gradient-x animate-pulse">
        Expense Tracker
      </h2>
      <form onSubmit={handleSubmit} className="relative z-10 flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="flex-1 px-4 py-2 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 bg-white/80 hover:border-pink-300 shadow-md"
          required
        />
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="w-32 px-4 py-2 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200 bg-white/80 hover:border-yellow-300 shadow-md"
          min="0"
          step="0.01"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-40 px-4 py-2 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200 bg-white/80 hover:border-blue-300 shadow-md"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-700 via-pink-600 to-yellow-500 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:from-pink-700 hover:to-yellow-500 transition-all duration-200 animate-pulse focus:ring-2 focus:ring-pink-400 focus:outline-none"
        >
          Add
        </button>
      </form>
      <div className="relative z-10 mb-4 text-lg font-semibold text-gray-700 text-right">
        Total: <span className="text-blue-600">${total.toFixed(2)}</span>
      </div>
      <div className="relative z-10 overflow-x-auto">
        <table className="min-w-full bg-white/90 border-2 border-blue-200 rounded-2xl shadow-xl">
          <thead>
            <tr className="bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100">
              <th className="py-3 px-4 border-b-2 border-blue-200 text-left font-bold text-blue-700 uppercase tracking-wider rounded-tl-2xl">Description</th>
              <th className="py-3 px-4 border-b-2 border-blue-200 text-right font-bold text-pink-700 uppercase tracking-wider">Amount</th>
              <th className="py-3 px-4 border-b-2 border-blue-200 text-center font-bold text-yellow-700 uppercase tracking-wider">Date</th>
              <th className="py-3 px-4 border-b-2 border-blue-200 text-center font-bold text-blue-700 uppercase tracking-wider rounded-tr-2xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-6 text-center text-gray-400 bg-white/80 rounded-b-2xl">No expenses yet.</td>
              </tr>
            ) : (
              expenses.map(exp => (
                <tr key={exp.id} className="hover:bg-yellow-100/60 transition-colors duration-200 group">
                  <td className="py-3 px-4 border-b border-blue-100 text-left group-hover:text-blue-700 font-medium">{exp.description}</td>
                  <td className="py-3 px-4 border-b border-blue-100 text-right group-hover:text-pink-700 font-semibold">${parseFloat(exp.amount).toFixed(2)}</td>
                  <td className="py-3 px-4 border-b border-blue-100 text-center group-hover:text-yellow-700 font-medium">{exp.date}</td>
                  <td className="py-3 px-4 border-b border-blue-100 text-center">
                    <button
                      onClick={() => handleDelete(exp.id)}
                      className="bg-gradient-to-r from-pink-400 to-yellow-300 text-white px-3 py-1 rounded-lg font-bold shadow hover:from-yellow-400 hover:to-pink-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
