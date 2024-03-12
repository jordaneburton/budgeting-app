// // TransactionPieChart.js
// import React, { useEffect, useState } from 'react';
// import { Doughnut } from 'react-chartjs-2';

// const TransactionPieChart = ({ transactions }) => {
//     const [chartData, setChartData] = useState({});

//     useEffect(() => {
//       // Process transactions and update chart data
//       const processedData = processTransactions(transactions);
//       setChartData(processedData);
//     }, [transactions]);

//     const processTransactions = (transactions) => {
//       // Your logic to organize transactions by category
//       // Example: Assuming transactions have a 'category' property
//       const categories = [...new Set(transactions.map((transaction) => transaction.category))];
//       const data = categories.map((category) => {
//         const categoryTransactions = transactions.filter((transaction) => transaction.category === category);
//         const totalAmount = categoryTransactions.reduce((total, transaction) => total + transaction.amount, 0);
//         return totalAmount;
//       });

//       return {
//         labels: categories,
//         datasets: [
//           {
//             data,
//             backgroundColor: generateRandomColors(categories.length),
//             hoverBackgroundColor: generateRandomColors(categories.length),
//           },
//         ],
//       };
//     };

//     const generateRandomColors = (count) => {
//       // Generate random colors (you may use a library for better color generation)
//       const colors = [];
//       for (let i = 0; i < count; i++) {
//         colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
//       }
//       return colors;
//     };

//     return <Doughnut data={chartData} />;
//   };

//   export default TransactionPieChart;