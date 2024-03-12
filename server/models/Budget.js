const { Schema, model } = require('mongoose');
const { Category } = require('./Categories');

const budgetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: false,
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
    },
    {
        toJSON: {
          virtuals: true,
        },
      }
);

const Budget = model('Budget', budgetSchema);

module.exports = Budget;