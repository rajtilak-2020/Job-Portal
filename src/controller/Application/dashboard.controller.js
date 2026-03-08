const productModal = require("../../models/Job");
require('dotenv').config()

exports.view = async(request, response) => {

    // Start
    const addCondition = [
        {
            deleted_at : null, 
        }
    ];

    const orCondition = [];

    if(addCondition.length > 0){
        var filter = { $and : addCondition }
    } else {
        var filter = {}
    }

    if(orCondition.length > 0){
        filter.$or = orCondition;
    }
    // End

    var totalRecords = await jobModal.find(filter).countDocuments();

    var totalJobs = await jobModal.aggregate([
        { $match: filter },
        { $count: 'total_jobs' }
    ]);

    var allJobCalculation = await jobModal.aggregate([
        { $match: filter },
        {
            $group : {
                _id : '',
                minSalary : { $min : '$min_salary' },
                maxSalary : { $max : '$max_salary' },
                total : { $sum : '$total_salary' },
                avgSalary : { $avg : '$avg_salary' }
            }
        }
    ])
    
    const output = {
        _status : true,
        _message : 'Record fetched !',
        totalRecords : totalRecords,
        totalJobs : totalJobs,
        allJobCalculation : allJobCalculation
    }

    response.send(output);
}