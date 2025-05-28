import React from 'react';

function About() {
    return (
        <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "2rem", background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
            <h1>About Expense Tracker</h1>
            <p>
                Expense Tracker is a simple and intuitive web application designed to help you manage your personal finances. 
                With this tool, you can easily record your income and expenses, categorize your transactions, and visualize your spending habits over time.
            </p>
            <h2>Features</h2>
            <ul>
                <li>Add, edit, and delete income and expense transactions</li>
                <li>View your balance, total income, and total expenses at a glance</li>
                <li>Filter transactions by category or date</li>
                <li>Visualize your spending with charts and summaries</li>
                <li>User-friendly and responsive design</li>
            </ul>
            <h2>Why Use Expense Tracker?</h2>
            <p>
                Keeping track of your finances is essential for achieving your financial goals. 
                Expense Tracker makes it easy to monitor your cash flow, identify unnecessary spending, and make informed decisions about your money.
            </p>
            <p>
                Start tracking your expenses today and take control of your financial future!
            </p>
        </div>
    );
}

export default About;