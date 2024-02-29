const {constants} = require("../constants");
const errorHandler = (err, req, res, next ) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (key) {
        case constants.VALIDATION_ERROR:
            res.json({
             title: "Validation Failed!",
             message: err.message,
             stackTrace: err.stack 
                }); 
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found!",
                message: err.message,
                stackTrace: err.stack 
             });
             break;
        case constants.UAUTHERIZED: 
            res.json({
                title: "Unaurtherized!",
                message: err.message,
                stackTrace: err.stack 
                });
            break;
        case constants.FORBIDDEN: 
            res.json({
                title: "Forbidden!",
                message: err.message,
                stackTrace: err.stack 
                });
            break;
        case constants.SERVER_ERROR: 
            res.json({
                title: "Server error!",
                message: err.message,
                stackTrace: err.stack 
                });
            break;    
        default:
            console.log("NO Error all good!")
            break;
    }
};

module.exports = errorHandler;