import mongoose from 'mongoose';

const GoalSchema = new mongoose.Schema({
    setterId: {
        type: String,
        index: true,
        require: true
    },
    goalTitle: String,
    goalStatus: String,
    startDate: String,
    endDate: String,
    time: String,
    timeLine:String,
    milestones: [
        {
            goal: String,
            startDate: String,
            endDate: String,
            percentage: String,
            status: String,
            achievement: [
                {
                    name: String,
                    percentage: String
                }
            ]
        }
    ]
})

export const GoalModel = mongoose.model("Goals", GoalSchema);