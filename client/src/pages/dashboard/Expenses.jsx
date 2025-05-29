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
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Expense Tracker</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          placeholder="Amount"
          className="w-32 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          min="0"
          step="0.01"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-40 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 font-semibold"
        >
          Add
        </button>
      </form>
      <div className="mb-4 text-lg font-semibold text-gray-700 text-right">
        Total: <span className="text-blue-600">${total.toFixed(2)}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Description</th>
              <th className="py-2 px-4 border-b text-right">Amount</th>
              <th className="py-2 px-4 border-b text-center">Date</th>
              <th className="py-2 px-4 border-b text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-4 text-center text-gray-400">No expenses yet.</td>
              </tr>
            ) : (
              expenses.map(exp => (
                <tr key={exp.id}>
                  <td className="py-2 px-4 border-b">{exp.description}</td>
                  <td className="py-2 px-4 border-b text-right">${parseFloat(exp.amount).toFixed(2)}</td>
                  <td className="py-2 px-4 border-b text-center">{exp.date}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      onClick={() => handleDelete(exp.id)}
                      className="text-red-500 hover:underline"
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
