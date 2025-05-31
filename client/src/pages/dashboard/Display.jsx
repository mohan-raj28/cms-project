import React, { useEffect, useState } from "react";
import storageService from "../../service/storageService";

export default function Display() {
  const [expenses, setExpenses] = useState([]);
  const [analysis, setAnalysis] = useState({
    total: 0,
    byMonth: {},
    byDay: {},
    byDescription: {},
    average: 0,
    max: null,
    min: null,
  });

  useEffect(() => {
    const stored = storageService.getItem("expenses");
    if (Array.isArray(stored)) {
      setExpenses(stored);
      analyzeExpenses(stored);
    }
  }, []);

  function analyzeExpenses(expenses) {
    if (!expenses.length) {
      setAnalysis({ total: 0, byMonth: {}, byDay: {}, byDescription: {}, average: 0, max: null, min: null });
      return;
    }
    let total = 0;
    let byMonth = {};
    let byDay = {};
    let byDescription = {};
    let max = expenses[0];
    let min = expenses[0];
    expenses.forEach(exp => {
      const amt = parseFloat(exp.amount || 0);
      total += amt;
      // By month
      const month = exp.date ? exp.date.slice(0, 7) : "Unknown";
      byMonth[month] = (byMonth[month] || 0) + amt;
      // By day
      byDay[exp.date] = (byDay[exp.date] || 0) + amt;
      // By description
      byDescription[exp.description] = (byDescription[exp.description] || 0) + amt;
      // Max/min
      if (amt > parseFloat(max.amount)) max = exp;
      if (amt < parseFloat(min.amount)) min = exp;
    });
    setAnalysis({
      total,
      byMonth,
      byDay,
      byDescription,
      average: total / expenses.length,
      max,
      min,
    });
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white/90 rounded-3xl shadow-2xl border-2 border-blue-200 animate-fade-in-up">
      <h2 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow animate-gradient-x animate-pulse">
        All Expenses & Analysis
      </h2>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2 text-blue-700">Summary</h3>
        <ul className="space-y-1 text-gray-700">
          <li>Total Expenses: <span className="font-bold text-blue-600">₹{analysis.total.toFixed(2)}</span></li>
          <li>Number of Transactions: <span className="font-bold text-pink-600">{expenses.length}</span></li>
          <li>Average Expense: <span className="font-bold text-emerald-600">₹{expenses.length ? (analysis.total/expenses.length).toFixed(2) : '0.00'}</span></li>
          <li>Most Recent Expense: <span className="font-bold text-yellow-600">{expenses.length ? `${expenses[expenses.length-1].description} (₹${parseFloat(expenses[expenses.length-1].amount).toFixed(2)}) on ${expenses[expenses.length-1].date}` : '-'}</span></li>
          <li>Highest Single Expense: <span className="font-bold text-red-600">{analysis.max ? `${analysis.max.description} (₹${parseFloat(analysis.max.amount).toFixed(2)})` : '-'}</span></li>
          <li>Lowest Single Expense: <span className="font-bold text-indigo-600">{analysis.min ? `${analysis.min.description} (₹${parseFloat(analysis.min.amount).toFixed(2)})` : '-'}</span></li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2 text-blue-700">Expenses by Month</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700">
          {Object.entries(analysis.byMonth).map(([month, amt]) => (
            <li key={month} className="bg-blue-50 rounded-lg px-3 py-1 font-semibold">{month}: <span className="text-blue-600">₹{amt.toFixed(2)}</span></li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2 text-blue-700">Expenses by Category</h3>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-700">
          {Object.entries(analysis.byDescription).map(([cat, amt]) => (
            <li key={cat} className="bg-pink-50 rounded-lg px-3 py-1 font-semibold">{cat}: <span className="text-pink-600">₹{amt.toFixed(2)}</span></li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2 text-blue-700">Top 3 Categories</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-gray-700">
          {Object.entries(analysis.byDescription)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([cat, amt]) => (
              <li key={cat} className="bg-yellow-50 rounded-lg px-3 py-1 font-bold text-yellow-700">{cat}: ₹{amt.toFixed(2)}</li>
            ))}
        </ul>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-2 border-blue-200 rounded-2xl shadow-xl">
          <thead>
            <tr className="bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100">
              <th className="py-3 px-4 border-b-2 border-blue-200 text-left font-bold text-blue-700 uppercase tracking-wider rounded-tl-2xl">Category</th>
              <th className="py-3 px-4 border-b-2 border-blue-200 text-right font-bold text-pink-700 uppercase tracking-wider">Amount</th>
              <th className="py-3 px-4 border-b-2 border-blue-200 text-center font-bold text-yellow-700 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="3" className="py-6 text-center text-gray-400 bg-white/80 rounded-b-2xl">No expenses yet.</td>
              </tr>
            ) : (
              expenses.map(exp => (
                <tr key={exp.id} className="hover:bg-yellow-100/60 transition-colors duration-200 group">
                  <td className="py-3 px-4 border-b border-blue-100 text-left group-hover:text-blue-700 font-medium">{exp.description}</td>
                  <td className="py-3 px-4 border-b border-blue-100 text-right group-hover:text-pink-700 font-semibold">₹{parseFloat(exp.amount).toFixed(2)}</td>
                  <td className="py-3 px-4 border-b border-blue-100 text-center group-hover:text-yellow-700 font-medium">{exp.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
