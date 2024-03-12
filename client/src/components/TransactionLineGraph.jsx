// // TransactionLineGraph.js
// import React from 'react';
// import { Line } from 'react-chartjs-2';

// const TransactionLineGraph = ({ transactions }) => {
//   // Process transactions and update chart data
//   const chartData = processTransactions(transactions);

//   // Customize chart options if needed
//   const options = {
//     scales: {
//       x: {
//         type: 'time',
//         time: {
//           unit: 'day', // Customize the time unit as needed
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Transaction Amount',
//         },
//       },
//     },
//   };

//   return <Line data={chartData} options={options} />;
// };

// const processTransactions = (transactions) => {
//   // Your logic to organize transactions by category and date
//   // Example: Assuming transactions have 'category', 'amount', and 'date' properties

//   const categories = [...new Set(transactions.map((transaction) => transaction.category))];
//   const datasets = categories.map((category) => {
//     const categoryTransactions = transactions.filter((transaction) => transaction.category === category);
//     const data = categoryTransactions.map((transaction) => ({
//       x: new Date(transaction.date), // Assuming date is a valid Date string or object
//       y: transaction.amount,
//     }));

//     return {
//       label: category,
//       data,
//       fill: false, // Set to true if you want to fill the area under the line
//     };
//   });

//   return {
//     datasets,
//   };
// };

// export default TransactionLineGraph;