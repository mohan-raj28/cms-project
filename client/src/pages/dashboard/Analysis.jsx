import React, { useEffect, useState } from "react";
import storageService from "../../service/storageService";
import {
  Bar,
  Pie,
  Line,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

export default function Analysis() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState({ month: "", description: "" });
  const [filtered, setFiltered] = useState([]);
  const [months, setMonths] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    const stored = storageService.getItem("expenses");
    setExpenses(Array.isArray(stored) ? stored : []);
  }, []);

  useEffect(() => {
    // Get unique months and descriptions
    const ms = Array.from(new Set(expenses.map(e => e.date?.slice(0, 7)).filter(Boolean)));
    const ds = Array.from(new Set(expenses.map(e => e.description)));
    setMonths(ms);
    setDescriptions(ds);
  }, [expenses]);

  useEffect(() => {
    let data = expenses;
    if (filter.month) data = data.filter(e => e.date?.startsWith(filter.month));
    if (filter.description) data = data.filter(e => e.description === filter.description);
    setFiltered(data);
  }, [expenses, filter]);

  // Chart data
  const byMonth = {};
  const byDescription = {};
  const byDay = {};
  filtered.forEach(e => {
    const amt = parseFloat(e.amount || 0);
    const m = e.date ? e.date.slice(0, 7) : "Unknown";
    byMonth[m] = (byMonth[m] || 0) + amt;
    byDescription[e.description] = (byDescription[e.description] || 0) + amt;
    byDay[e.date] = (byDay[e.date] || 0) + amt;
  });

  // Bar chart: Expenses by Month
  const barData = {
    labels: Object.keys(byMonth),
    datasets: [
      {
        label: "Total by Month (₹)",
        data: Object.values(byMonth),
        backgroundColor: "#60a5fa",
      },
    ],
  };

  // Pie chart: Expenses by Description
  const pieData = {
    labels: Object.keys(byDescription),
    datasets: [
      {
        label: "By Description (₹)",
        data: Object.values(byDescription),
        backgroundColor: [
          "#f472b6",
          "#facc15",
          "#34d399",
          "#60a5fa",
          "#a78bfa",
          "#f87171",
        ],
      },
    ],
  };

  // Line chart: Expenses by Day
  const lineData = {
    labels: Object.keys(byDay).sort(),
    datasets: [
      {
        label: "Total by Day (₹)",
        data: Object.keys(byDay).sort().map(d => byDay[d]),
        borderColor: "#a78bfa",
        backgroundColor: "#ddd6fe",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white/90 rounded-3xl shadow-2xl border-2 border-blue-200 animate-fade-in-up">
      <h2 className="text-3xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow animate-gradient-x animate-pulse">
        Expense Analytics
      </h2>
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <select
          className="px-4 py-2 rounded-xl border-2 border-blue-200 bg-blue-50 text-blue-700 font-semibold focus:outline-none"
          value={filter.month}
          onChange={e => setFilter(f => ({ ...f, month: e.target.value }))}
        >
          <option value="">All Months</option>
          {months.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <select
          className="px-4 py-2 rounded-xl border-2 border-pink-200 bg-pink-50 text-pink-700 font-semibold focus:outline-none"
          value={filter.description}
          onChange={e => setFilter(f => ({ ...f, description: e.target.value }))}
        >
          <option value="">All Descriptions</option>
          {descriptions.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-blue-50 rounded-2xl p-4 shadow">
          <h3 className="text-lg font-bold mb-2 text-blue-700">Expenses by Month</h3>
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>
        <div className="bg-pink-50 rounded-2xl p-4 shadow">
          <h3 className="text-lg font-bold mb-2 text-pink-700">Expenses by Description</h3>
          <Pie data={pieData} options={{ responsive: true }} />
        </div>
      </div>
      <div className="bg-purple-50 rounded-2xl p-4 shadow mb-8">
        <h3 className="text-lg font-bold mb-2 text-purple-700">Expenses by Day</h3>
        <Line data={lineData} options={{ responsive: true }} />
      </div>
      <div className="text-center text-gray-500 text-sm">Powered by Chart.js & react-chartjs-2</div>
      <div className="mt-8 p-4 rounded-2xl bg-gray-50 shadow">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Summary Statistics</h3>
        <ul className="space-y-2">
          {filtered.length > 0 ? (
            (() => {
              const total = filtered.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);
              const average = total / filtered.length;
              const max = filtered.reduce((prev, current) => (parseFloat(current.amount) > parseFloat(prev.amount) ? current : prev), filtered[0]);
              const min = filtered.reduce((prev, current) => (parseFloat(current.amount) < parseFloat(prev.amount) ? current : prev), filtered[0]);
              
              return (
                <>
                  <li>Total Expenses: <span className="font-bold text-blue-600">₹{total.toFixed(2)}</span></li>
                  <li>Average Expense: <span className="font-bold text-pink-600">₹{average.toFixed(2)}</span></li>
                  <li>Largest Expense: <span className="font-bold text-yellow-600">{max ? `${max.description} (₹${parseFloat(max.amount).toFixed(2)})` : '-'}</span></li>
                  <li>Smallest Expense: <span className="font-bold text-emerald-600">{min ? `${min.description} (₹${parseFloat(min.amount).toFixed(2)})` : '-'}</span></li>
                </>
              );
            })()
          ) : (
            <li className="text-gray-400">No expenses found for the selected filters.</li>
          )}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Detailed Expenses</h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Category</th>
                <th className="px-4 py-2 text-right text-sm font-semibold text-gray-700">Amount (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filtered.length > 0 ? (
                filtered.map((exp, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-left text-sm text-gray-600">{new Date(exp.date).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-left text-sm text-gray-600">{exp.description}</td>
                    <td className="py-3 px-4 border-b border-blue-100 text-right group-hover:text-pink-700 font-semibold">₹{parseFloat(exp.amount).toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-3 px-4 text-center text-sm text-gray-400">No expenses found for the selected filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
