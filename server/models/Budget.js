const { Schema, model } = require('mongoose');
const { Category } = require('./Categories');

const totalBudgetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    budgetPeriod: {
        type: String,
        enum: ['1 month', '2 months', '3 months', '6 months', '1 year'], // Example durations
        required: true,
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    // Other fields related to the total budget if needed
});

const TotalBudget = model('TotalBudget', totalBudgetSchema);

module.exports = TotalBudget;