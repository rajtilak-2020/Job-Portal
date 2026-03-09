const mongoose = require('mongoose');

const JobTypeSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required'],
        match: /^[a-zA-Z ]{2,15}$/,
        validate: {
            validator: async function(v) {
                const name = await this.constructor.findOne({ name: v });
                return !name;
            },
            message: props => `The specified name is already in use.`
        },
        minLength : [3, 'Minumum length must be 3 charater'],
        maxLength : [15, 'maximum length must be 15 charater'],
    },
    status : {
        type : Boolean,
        default : true,
    },
    apply : {
        type : Number,
        default : 0,
        min : [0, 'Minumum value must be greather than 0'],
        max : [1000, 'Maximum value must be less than 1000'],
    },
    created_at : {
        type : Date,
        default : Date.now()
    },
    updated_at : {
        type : Date,
        default : Date.now()
    },
    deleted_at : {
        type : Date,
        default : ''
    }
});

const JobTypeModal = mongoose.model('jobtype',JobTypeSchema);

module.exports = JobTypeModal;