const mongoose = require('mongoose')
const Schema = mongoose.Schema
const leaveSchema = new Schema({
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'Staff',
        required: [true, 'select a staff']
    },
    leaves: {
        type: Number,
        required: true
    },
    from_date: {
        type:Date,
        required: true
    },
    to_date: {
        type:  Date,
        required: true
    },
    status: {
        type:String
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'user',
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Leave = mongoose.model('Leave', leaveSchema)

module.exports = Leave